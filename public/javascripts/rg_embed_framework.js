// Properties for RealGravity Class
function RealGravity() {
	RealGravity.scriptId = 0;
	RealGravity.placemakerStarted = false;
	RealGravity.locationUrl = "";
}

// Variables
RealGravity.LOG_ID = "_rglog_";
RealGravity.pageTags = "title,h1,h2,h3,h4,h5,h6,em,div,a";


// +++++++++++++++++++++++++++++++++
// RealGravity Setters
// +++++++++++++++++++++++++++++++++

RealGravity.prototype.setContext = function(context) {
	this.context = context;
	return this;
};

RealGravity.prototype.setMode = function(mode) {
	this.mode = mode;
	return this;
};

RealGravity.prototype.setToken = function(token) {
	this.token = token;
	return this;
};


// +++++++++++++++++++++++++++++++++
// RealGravity Class Methods
// +++++++++++++++++++++++++++++++++

//  string trim function
RealGravity.stringTrim = function(str) {
	var reL = /\s*((\S+\s*)*)/;
	str = str.replace(reL, "$1");

	var reR = /((\s*\S+)*)\s*/;
	str = str.replace(reR, "$1");

	return str;
};

// Logger
RealGravity.log = function(msg) {
	var log = document.getElementById(RealGravity.LOG_ID);
	if (log != null) {
		var tmp = document.createElement('div');
		log.appendChild(tmp);
		tmp.appendChild(document.createTextNode(msg));
	}
	if (typeof console != 'undefined' && typeof console.log == 'function') {
		console.log(msg);
	}
};

// Let's try and get the location from the title'
//Placemaker.getPlaces(document.title,geoLocationReturn,'en-us');
// If we already have a place for this page then don't look for it again'

RealGravity.findPageLocation = function (){
	if (RealGravity.place == null && RealGravity.placemakerStarted == false) {
		console.log("Starting Placemaker...");
		
    var pageContent = RealGravity.grabPageContent();
		RealGravity.placemakerStarted = true;
    RealGravity.log("Page Context -> " + pageContent);
    RealGravity.Placemaker.analyzeText(pageContent,RealGravity.findPageLocationReturn,'en-us');
	};
};

RealGravity.findPageLocationReturn = function (loc) {

  if ((loc == null)) {
		RealGravity.setLocationUrl(false);
    RealGravity.log("We couldn't extract a location from the page content");
  } else {
		if (typeof loc.match[0] == 'undefined'){
			RealGravity.place = loc.match.place;
		} else {
			RealGravity.place = loc.match[0].place;
		}
  RealGravity.log("Extracted location = " + RealGravity.place.name)
	RealGravity.setLocationUrl(true);
  }
};

RealGravity.grabPageContent = function() {

	if (this.pageTags == null)
		this.pageTags = RealGravity.pageTags;
	var contentTags = this.pageTags.split(',');

	for (var i=0; i<contentTags.length; i++) {
		var tags = document.getElementsByTagName(contentTags[i]);
		var tagContent = [];
		for (var j=0; j<tags.length; j++) {
			var content = tags[j].innerHTML;
			tagContent.push(content.toLowerCase());
		}
		tagContent = tagContent.join(' ');
    return tagContent;
	}
};

// find location information about the page being viewed
RealGravity.Placemaker = {

    analyzeURL  : function(url, callback, locale){
        var query ='select * from geo.placemaker where documentURL="'+
                encodeURIComponent(url)+'" and documentType="text/html"';
        if(locale!==''){
            query += ' and inputLanguage="'+locale+'"';
        }
        RealGravity.Placemaker.seed(query);
        RealGravity.Placemaker.callback = callback;
    },
    analyzeFeed : function(url, callback, locale){
        /*TODO */
    },
    analyzeText : function(text, callback, locale){
        var query ='select * from geo.placemaker where documentContent="'+
                encodeURIComponent(text)+'" and documentType="text/plain"';
        if(locale!==''){
            query += ' and inputLanguage="'+locale+'"';
        }
        RealGravity.Placemaker.seed(query);
        RealGravity.Placemaker.callback = callback;
    },
    seed        : function(query){
        query += ' and appid="'+ RealGravity.yahooAppId +'"';
        var url = 'http://query.yahooapis.com/v1/public/yql?q='+
                  encodeURIComponent(query)+'&format=json'+
                  '&env=http%3A%2F%2Fdatatables.org%2Falltables.env&'+
                  'callback=RealGravity.Placemaker.retrieve';
        var s = document.createElement('script');
        s.setAttribute('src',url);
        document.getElementsByTagName('head')[0].appendChild(s);
    },
    retrieve    : function(o){
				var data = null;
				if (o.query.results != null) {
 					data = o.query.results.matches
				}
        RealGravity.Placemaker.callback(data);
    }
};

// Make the ajax request to the backend  
RealGravity.loadUrl = function(url, omitRg) {
	if (!omitRg) {
		url = "http://mediacast.realgravity.com/" + url;
	}
	RealGravity.log("load url: " + url);
	var head = document.getElementsByTagName("head").item(0);
	script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	script.setAttribute('id', 'YJscriptId' + RealGravity.scriptId++);
	head.appendChild(script);
};

// get the results from placematker and send the request to the backend to build a location player
RealGravity.setLocationUrl = function (success) {	   
	
	if (success) {
		var latitude = RealGravity.place.centroid.latitude;
		var longitude = RealGravity.place.centroid.longitude;	
		
		url = encodeURI(RealGravity.locationUrl + "?lat=" + latitude + "&lng=" + longitude);

	} else {
		url = encodeURI(RealGravity.locationUrl + "?lat=false&lng=false");
	};
	
	RealGravity.loadUrl(url,false);
}

// set the scope values before they go out of scope
RealGravity.prototype.getPlacemakerResults = function() {
	var path = new Array();

	path.push("get_location_player");
	path.push(this.token);
	RealGravity.locationUrl = path.join('/');
};

// request to the backend to build an embedded player
RealGravity.prototype.getEmbedCode = function() {
	var path = new Array();
	path.push("get_embed_player");
	path.push(this.token);
	var url = path.join('/');

	RealGravity.loadUrl(url,false);
};

// Determine the player mode and send request for the player embed to the backend
RealGravity.prototype.start = function(element) {
	
	// set this to be the first time that placemaker will be called
	RealGravity.placemakerStarted = false;

	// html ID for the page
	RealGravity.element = element;
		
	// Determine how the player was called
	
	// if an embed uuid exist, get the player
	if (this.mode == 'embed') {
		this.getEmbedCode();
		
	// for playlist mode 
	} else if (this.mode == 'location') {
		
		// call placemaker to get the lat and lng of the page being viewed
		RealGravity.findPageLocation();
		this.getPlacemakerResults();
	
	} else if (this.mode == 'search') {
		if (typeof this.context == 'undefined') {
			var context = false;
		} else {
			var context = this.context.replace(' ','_').toLowerCase();			
		}
		var path = new Array();
		path.push("get_search_player");
		path.push(this.token);
		path.push(context);
		var url = path.join('/');

		RealGravity.loadUrl(url,false);
	}
}

// uses this callback from the backend to display player on the page
RealGravity.displayPlayer = function (embedcode) {
	var insertPoint = RealGravity.element;
	
	if (embedcode != '') {
		document.getElementById(insertPoint).innerHTML = embedcode;            
	}
}
   
