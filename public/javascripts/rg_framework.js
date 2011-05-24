// NOTE: If there are multiple tags in a page, this script should be included once in the header,
// and the replace call should happen multiple times.
function RealGravity() {
	this.instanceId = RealGravity.instances.length;
	RealGravity.instances[this.instanceId] = this;
	this.awaitingStart = false;
	this.started = false;
	this.element = null;	// dom element that holds player
	this.playlist = [];		// contains the actual playlist
	this.player = null;
	this.playerSize = '300x600';
	this.currentItem = 0; // in playlist
	this.context = null; //if set, we'll use this instead of searching for it
	this.strict = true;
	this.token = null;
	this.currentVideo = null;

	this.staticPlaylist = [];
	this.searchOrder = "relevance";
	this.index = "Travel";
	this.providers = "all";
	this.qualifiers = "all";
	this.dateRange = "all";
	this.resultCount = 20;
	this.pageTags = null;
	this.pageTrackers = [];
	this.pageTrackerIds = []; // RG's GA id'
	this.shuffle = true;

	this.fPlayerFrontColor = "FFFFFF";
	this.fPlayerLightColor = "FFFFFF";
//	this.fPlayerSkin = "snel";
	this.fPlayerSkin = "modieus";
	this.fPlayerPlayList = "bottom";
	this.fPlayerControlBar = "bottom";  // valid values are: none, bottom, top and over (note: with overlay ads, bottom works best)
	this.fPlayerAutoStart = true;
	this.fPlayerVolume = "80";
	this.fPlayerAdMute = false;
	this.fPlayerRepeat = "list"; // Valid values are: "none,list,always,single"

        // This is for companion ads
        this.companionAd = false;
        this.companionAdPosition = 4; // This is bottom; 1=top; 2=left; 3=right; 4=bottom
        this.companionAdStyleJson = null;
        this.companionAdStyleString = null;

        // This is for the player header
        this.playerHeader = false;
        this.playerHeaderStyle = null;
        this.playerHeaderTitle = null;
        this.playerHeaderTitleStyle = null;

        // Tracking for slow load and starting of player
        this.scriptLoadTime = new Date().getTime();

        this.videoDataCallBackDivs = null;
        this.videoAdSlots = { preroll_ad_slot: 0, preroll_ad_freq : 1, overlay_ad_slot : 0,
                                overlay_ad_freq : 1, midroll_ad_slot : 0, midroll_ad_freq : 1, overlay2_ad_slot : 0, overlay2_ad_freq : 1,
                                postroll_ad_slot : 0, postroll_ad_freq : 1};
        this.playerAdHeader = {ad_header : true, ad_header_title : "Advertisement", ad_header_background_color : "736F6E",
                                ad_header_foreground_color : "FFFFFF" };
                                
		// Notes:
		//		Valid font-family values for the CSS are: '_sans', '_serif' or '_typewriter'.
		//		Valid video_title_effect values are: 'fade', 'wipe'.
		//		Setting video_title_autohide to 0 will cause it to stay on steadily during content play
		//
		//		 Other allowed html & css parameters are here:
		//			http://help.adobe.com/en_US/AS3LCR/Flash_10.0/flash/text/TextField.html#htmlText
		//			http://help.adobe.com/en_US/AS3LCR/Flash_10.0/flash/text/StyleSheet.html
		//
		// Some html/css examples:
		//		Title with header and playlist title on separate lines
		//			video_title_html : "<body><span class='vidheader'>A $vidheader:&nbsp;</span><br>$vidbody</body>",
		//			video_title_css : "body { background-color:#666666; } .vidheader { color:#FFFFFF; margin-left:5; text-align:left; font-family:_typewriter; font-size:10; } .vidbody { color:#FFFFFF; margin-left:0; text-align:center; font-family:_sans; font-size:10; }",
		//
		//		Title with a logo image and playlist title
		//			video_title_html : "<body> <span class='vidheader'><br>$vidbody</span><img src='realgravity_logo.jpg' vspace='-16'/></body>",
		//			video_title_css : "body { background-color:#666666; margin-left:90;} .vidheader { color:#FFFFFF; font-family:_sans; font-size:10;  }",
/*		
        this.playerVidTitle = { video_title : true, 
								video_title_height : 35,
								video_title_html : "<body><br><span class='vidheader'>$vidheader</span><span class='vidbody'>$vidbody</span></body>",
								video_title_css : "body {font-family:_sans; font-weight:bold; background-color:#333333; } .vidheader { font-size:12x; font-weight:bold; color:#94d5f8; margin-left:5px; text-align:left; } .vidbody { color:#FFFFFF; margin-left:0px; font-weight:bold; font-size:11px; text-align:center; }",
								video_title_header_text : "FLORIDA:&nbsp;", 
								video_title_body_text : "&nbsp;", 
        						video_title_autohide : 5,
        						video_title_effect : 'wipe' };
*/
        this.playerVidTitle = { video_title : true, 
								video_title_height : 30,
								video_title_html : "<body><span class='vidheader'><font face='Arial Black' color='#00FFBB'>$vidheader</font><font face='Arial Black' color='#000000'>-</font><font face='Arial'>$vidbody</font><img src='http://dlh-pro.local/~dlh/Clients/RealGravity/v20100903JW52/realgravity_logo-title.jpg' height='19' width='90' vspace='-20'/></span></body>",
								video_title_css  : "body {background-color:#000000;} .vidheader {text-indent: 110px; color:#FFFFFF;font-size:16px;}",
								video_title_header_text : "Florida Trave:", 
								video_title_body_text : "Starting...", 
        						video_title_autohide : 0,
	       						video_title_effect : 'wipe' };

        this.publisherChannel = "none"; // set the default value

        // Try to get the top most URL. If we can't get it do to cross domain persmision
        // Also, the calling script can overide this with a static text string by using
        // the setPageReference method.
        try
        {
            this.pageReference = top.location.href;
        }
        catch(err)
        {
            this.pageReference = window.location.href;
        }

        // Check to see if we should enable US Geo blocking
        this.usGeoBlocking = false;
        this.useHistory = true;
        this.searchRadius = 100;

}

RealGravity.instances = [];
// daveh Change this for production
RealGravity.VIDEO_HOST = "http://dlh-pro.local/~dlh/Clients/RealGravity/v20100903JW52";
//RealGravity.VIDEO_HOST = "http://mediacast.realgravity.com";
RealGravity.pageTags = "title,h1,h2,h3,h4,h5,h6,em,div,a";
RealGravity.contextPath = null;
RealGravity.place = null;
RealGravity.searchContext = null;
RealGravity.filterQualifiers = null;
RealGravity.filterProviders = null;
RealGravity.keywords = null; //going away
RealGravity.providers = null; //going away
RealGravity.providers_w_results = null; //going away
RealGravity.loading = false;	// loading keywords, etc.
RealGravity.loaded = false;	 // loaded keywords, etc.
RealGravity.ID_PREFIX = 'rg_video_player_';   // NOTE: There are dependencies with this variable to the backend
RealGravity.COOKIE_WATCHED = '_rg_videos_watched';
RealGravity.LOG_ID = "_rglog_";
RealGravity.sessionId = null;
RealGravity.history = []; // videos we've played, latest first
RealGravity.historySize = 30; // number of items to store in history
RealGravity.scriptId = 0;
// NOTE: Can only debug one or the other - player or plugin - not both at once
RealGravity.playerDebug = ""; // set to "" to load non-debug version or to "_debug" to load debug version
RealGravity.pluginDebug = "_debug"; // set to "" to load non-debug version or to "_debug" to load debug version

// These are for YuMe add integration
//RealGravity.FLASH_BASE_PATH = 'http://mediacast.realgravity.com/flash/';
RealGravity.FLASH_BASE_PATH = RealGravity.VIDEO_HOST + '/flash/';
RealGravity.FLASH_SKIN_DIR = RealGravity.FLASH_BASE_PATH + 'skins/';
RealGravity.YUME_PRE_ROLL_PATH = '/dynamic_preroll_playlist.fmil';
RealGravity.YUME_GRAPHIC_OVERLAY_PATH = '/dynamic_overlay_playlist.fmil';
RealGravity.YUME_MID_ROLL_PATH = '/dynamic_midroll_playlist.fmil';
RealGravity.YUME_POST_ROLL_PATH = '/dynamic_postroll_playlist.fmil'
RealGravity.YUME_OVERLAY_START = 10; // Displays the graphic overlay ad after the video has been running or 10 seconds
RealGravity.YUME_IMU = "medrect,leaderboard,widesky";

RealGravity.EVENT_INFO = "info"
RealGravity.EVENT_REVENUE = "revenue"
RealGravity.EVENT_ERROR = "error"

// Unless set by the server don't send INFO events back to realgravity server
// but still send them to Google Analtyics.
RealGravity.infoEvents = false;
RealGravity.playAds = false;
RealGravity.adDomain = null;
RealGravity.adServer = null;

// Create the Asynch queue and setup RG default GA account.
var _gaq = _gaq || [];
    _gaq.push(['_setAccount', "UA-7944495-1"]);
    _gaq.push(['_trackPageview']);
    _gaq.push(['_trackEvent',"Script",  "loading", this.pageReference, 1]);

// Determine if Publisher has been set outside of the script if not, determine it.
if (typeof RealGravity.publisher == 'undefined'){
    RealGravity.publisher = location.hostname;
}

RealGravity.SIZES = {
	"300x250": {
		width: 300,
		height: 250,
		playlist: 0
	},
	"300x600": {
		width: 300,
		height: 600,
		playlist: 350
	},
	"500x800": {
		width: 500,
		height: 800,
		playlist: 350
	},
	"YouTube": {
		width: 600,
		height: 340,
		playlist: 0
	},
	"Hulu": {
		width: 640,
		height: 330,
		playlist: 0
	}
};

// If IE then use the object tag.	Otherwise use the embed tag
if (navigator.appName == 'Microsoft Internet Explorer') {
//			+ '<param name=movie value="' + RealGravity.VIDEO_HOST + '/flash/rg_player5'+RealGravity.playerDebug+'.swf"/>'
	RealGravity.embedCode =
		'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '
			+ 'width="$WIDTH" height="$HEIGHT" '
			+ 'id="' + RealGravity.ID_PREFIX + '$ID" '
			+ 'name="' + RealGravity.ID_PREFIX + '$ID" >'
			+ '<param name=movie value="' + RealGravity.VIDEO_HOST + '/flash/player.swf"/>'
			+ '<param name=wmode value=transparent />'
			+ '<param name=allowNetworking value=all />'
			+ '<param name=allowScriptAccess value=always />'
			+ '<param name=allowfullscreen value=true />'
			+ '<param name=flashvars value="$FLASH_VARS" /> '
			+ '</object>';
 } else {
//	RealGravity.embedCode = '<embed src="' + RealGravity.VIDEO_HOST + '/flash/rg_player5'+RealGravity.playerDebug+'.swf" '
	RealGravity.embedCode = '<embed src="' + RealGravity.VIDEO_HOST + '/flash/player.swf" '
		+ 'width="$WIDTH" height="$HEIGHT" id="' + RealGravity.ID_PREFIX + '$ID"'
		+ 'name="' + RealGravity.ID_PREFIX + '$ID" '
		+ 'wmode="transparent"'
		+ 'allowNetworking="all"'
		+ 'allowscriptaccess="always"'
		+ 'allowfullscreen="true"'
		+ 'flashvars="$FLASH_VARS" />';
}


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

/**
 * Track event to all page trackers (ga)
 * @private
 */
RealGravity.prototype.GATrackEvent = function(a, b, c, d) {

        // Use the default RealGravity default GA account
        _gaq.push(['_trackEvent', a,b,c,d]);

        // If there are other GA accounts then send events to those accounts too
	for (var i=0; i<this.pageTrackers.length; i++) {
		try {
			_gaq.push(['ga' + i + '._trackEvent', a,b,c,d]);
//                        this.pageTrackers[i]._trackEvent(a, b, c, d);
		} catch (e) { }
	}
};

RealGravity.prototype.trackEvent = function (type, category, action, label, counter ) {

    // Track the event with GA so partners can see the data
    this.GATrackEvent(category, action, label, counter);

    if (!RealGravity.infoEvents && type == RealGravity.EVENT_INFO){
        RealGravity.log("Info event skipped: category=" + category + " action=" + action + " label =" + label);
    }else{
        // Track the event on our back-end so we can reconcile data and reports
        this.RGTrackEvent(type, category, action, label, counter);
    }
};

RealGravity.prototype.RGTrackEvent = function(type, category, action, label, counter){

    var videoGuid = "null"
    var countryCode = "null"
    if (this.playlist.length != 0){
        videoGuid = this.playlist[this.currentItem].guid;
    }

     if (typeof geoip_country_code == 'function') {
         countryCode = geoip_country_code();
     }

    var newUrl = "/events"
            + "?rg_type=" + type
            + "&rg_publisher=" + RealGravity.publisher
            + "&rg_ad_domain_id=" + RealGravity.adDomain
            + "&rg_guid=" + videoGuid
            + "&rg_session=" + RealGravity.sessionId
            + "&rg_user_country_code=" + countryCode
            + "&rg_category=" + category
            + "&rg_action=" + action
            + "&rg_lable=" + label
            + "&rg_counter=" + counter;

    // Make call to backend.
    RealGravity.loadUrl(newUrl);
};

RealGravity.prototype.loadGa = function() {
	RealGravity.log("GA: loading script");
	if (typeof _gat == 'undefined') {
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		gaJsHost += "google-analytics.com/ga.js";
		RealGravity.loadUrl(gaJsHost, true);
	}

        // Load other GA accounts if present
        for (var i=0; i<this.pageTrackerIds.length; i++) {
            var id = this.pageTrackerIds[i];
            var gaPreFix = "ga" + i +"."
            RealGravity.log("GA: pageTracker id = " + id);
            _gaq.push([gaPreFix + '_setAccount', id]);
            _gaq.push([gaPreFix + '_trackPageview']);
            this.pageTrackers.push(gaPreFix);
        }
};

RealGravity.prototype.loadQuantcast = function () {

    if (document.getElementById("RealGravity.quantCast") == null){

        RealGravity.log("Quantcast: loading script");
        if (typeof _qoptions == 'undefined'){
            var quantJsHost = "http://edge.quantserve.com/quant.js";
            RealGravity.loadUrl(quantJsHost, true);
        }
        _qoptions={qacct:"p-8bxtEXh3oPeoI"};
        var quantcastBeacon ='<img src="http://pixel.quantserve.com/pixel/p-8bxtEXh3oPeoI.gif" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/>';

        var quantCastDiv = document.createElement('div');
        quantCastDiv.id = "RealGravity.quantCast";

	quantCastDiv.style.visibility = 'hidden';
        // Write the QuantCast div tag to web page
        this.element.appendChild(quantCastDiv);

        // Add the beacon content to the div tag
        RealGravity.updatePageDivTags("RealGravity.quantCast", quantcastBeacon);
    }

};

// By downloading this javascript file, it automatically determines the user's location'
RealGravity.loadLocation = function () {
	if (typeof geoip_country_code != 'function'){
   // var maxMindJsHost = "http://j.maxmind.com/app/geoip.js";
    var maxMindJsHost = "http://j.maxmind.com/app/country.js";
    RealGravity.loadUrl(maxMindJsHost, true);
    RealGravity.log("Getting user's country code")
	}
};

RealGravity.findPageLocation = function (){
	// Let's try and get the location from the title'
	//Placemaker.getPlaces(document.title,geoLocationReturn,'en-us');
	// If we already have a place for this page then don't look for it again'

	if (RealGravity.place == null) {
    var pageContent = RealGravity.grabPageContent();
    RealGravity.log("Page Context -> " + pageContent);
    RealGravity.Placemaker.analyzeText(pageContent,RealGravity.findPageLocationReturn,'en-us');
	}


};

RealGravity.findPageLocationReturn = function (loc) {

   if ((typeof loc.match == 'undefined')) {
       RealGravity.log("We couldn't extract a location from the page content");
   }
   else{
        try{
            RealGravity.place = loc.match[0].place
        }
        catch (e){
           RealGravity.place = loc.match.place
        }
        RealGravity.log("Extracted location = " + RealGravity.place.name)
        RealGravity.init_ready();
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

//RealGravity.prototype.loadLocation = function () {
//
// //TODO: come back and make this work!
//    if (document.getElementById("RealGravity.userGeoLocation") == null){
//        if (typeof geoip_country_code == 'function') {
//            this.userLocationCountryCode = geoip_country_code();
//
//            var userGeoLocationDiv = document.createElement('div');
//            userGeoLocationDiv.id = "RealGravity.userGeoLocation";
//            this.element.appendChild(userGeoLocationDiv);
//
//            var geoContent = '<h3>Information from your IP</h3>'+
//                    '<ul>'+
////                    '<li>Latitude: ' + geoip_latitude() + '</li>'+
////                    '<li>Longitude: ' + geoip_longitude() + '</li>'+
////                    '<li>City: ' + geoip_city() + '</li>'+
////                    '<li>Region: ' + geoip_region() + '</li>'+
////                    '<li>Region Name: ' + geoip_region_name() + '</li>'+
////                    '<li>Postal Code: ' + geoip_postal_code() + '</li>'+
//                    '<li>Country Code: ' + geoip_country_code() + '</li>'+
//                    '<li>Country Name: ' + geoip_country_name() + '</li>'+
//                    '</ul>';
//             RealGravity.updatePageDivTags("RealGravity.userGeoLocation", geoContent);
//            }
//    }
//
//};

/**
 * Loads the publisher related information. You only need to do this
 * when you are using the non "token" mode.
 */
//RealGravity.loadPublisher = function() {
//
//	// if loadExtra is called multiple times, just ignore but
//	// if loadExtra_ready has been called, start up instance
//	if (!RealGravity.loading) {
//		RealGravity.loading = true;
//		RealGravity.log("Loading Publisher");
//		RealGravity.loadKeywords();
//		// NOTE: RealGravity.loadExtra_ready() gets called
//	} else if (RealGravity.loaded) {
//		RealGravity.init_ready();
//	}
//};

RealGravity.loadHistory = function() {

    if (RealGravity.history.length == 0){
        var tmp = RealGravity.Cookie.read(RealGravity.COOKIE_WATCHED);
        if (tmp != null) {
            RealGravity.history = tmp.split('|');
        }
        RealGravity.log("Loaded user's history");
    }
}

/**
 * if any instances of RealGravity were waiting, start them back up
 */
RealGravity.init_ready = function() {
	RealGravity.loaded = true;
	RealGravity.log("(static) in publisher_ready()");
	for (var i=0; i<RealGravity.instances.length; i++) {
		RealGravity.instances[i]._start();
	}
};

/**
 * loads keywords and index from cookie or makes request
 * then calls init() when done
 */
//RealGravity.loadKeywords = function() {
//	//TODO: if cookie, read from there first/instead
////	RealGravity.loadUrl('/vs/publisher/1');
//        //TODO: come back and encode the hostname so we can pass it directly to backend
//          RealGravity.loadUrl('/vs/publisher/1/' + RealGravity.publisher.replace(/\W/g,"|"));
//
//};

RealGravity.loadUrl = function(url, omitRg) {
	if (!omitRg)
		// daveh - make remote during testing
		url = "http://mediacast.realgravity.com/" + url;
//		url = RealGravity.VIDEO_HOST + url;
	RealGravity.log("load url: " + url);
	var head = document.getElementsByTagName("head").item(0);
	script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	script.setAttribute('id', 'YJscriptId' + RealGravity.scriptId++);
	head.appendChild(script);
};

/**
 * gets called after keywords and index are set
 * final call to loadUrl returns code that calls:
 * RealGravity.Video.init(...);
 * RealGravity.dislay(bln)
 */
//RealGravity.keywords_ready = function() {
//	var pairs = this.keywords.split('|');
//	for (var i=0; i<pairs.length; i++) {
//		var tmp = pairs[i].split(':');
//		pairs[i] = { word: tmp[0], type: tmp[1] };
//	}
//	this.keywords = pairs;
//
//	RealGravity.grabContext2();
//	RealGravity.init_ready();
//};

RealGravity.generateGUID = function() {
	RealGravity.log("generating guid");
	var result = [];
	for(var j=0; j<32; j++) {
		result.push(Math.floor(Math.random()*16).toString(16));
	}
	return result.join('');
};


/** adds items to the playlist for when in playlist mode */
RealGravity.prototype.addItem = function(guid) {
	this.staticPlaylist.push(guid);
	return this;
};

/** allows publisher to set analytics id for tracking */
RealGravity.prototype.setAnalyticsId = function(ids) {
	var ids = ids.split(',');
	for (var i=0; i<ids.length; i++) {
		this.pageTrackerIds.push(RealGravity.stringTrim(ids[i]));
	}
	return this;
};

/**
 * for search, "all", "week", "month" are expected
 * note: added to bookmarklet
 */
RealGravity.prototype.setDateRange = function(o) {
	this.dateRange = o;
	return this;
};

/**
 * sets the index to use, currently only "Travel" is supported
 * note: added to bookmarklet
 */
RealGravity.prototype.setIndex = function(i) {
	this.index = i;
	return this;
};

/**
 * sets the player mode: auto[default], manual, playlist
 * note: added to bookmarklet
 */
RealGravity.prototype.setMode = function(mode) {
	this.mode = mode;
	return this;
};

RealGravity.prototype.setPageTags = function(o) {
	this.pageTags = o;
	return this;
};

/**
 * note: added to bookmarklet
 */
RealGravity.prototype.setProviders = function(o) {
        this.providers = o;
	return this;
};

/**
 * note: added to bookmarklet
 */
RealGravity.prototype.setQualifiers = function(o) {
	this.qualifiers = o;
	return this;
};

/**
 * note: added to bookmarklet
 */
RealGravity.prototype.setResultCount = function(o) {
	this.resultCount = o;
	return this;
};

/**
 * note: added to bookmarklet
 */
RealGravity.prototype.setSearchOrder = function(o) {
	this.searchOrder = o;
	return this;
};

RealGravity.prototype.setUseHistory = function(o) {
    this.useHistory = o;
    return this;
}

/**
 * @param o boolean
 */
RealGravity.prototype.setShuffle = function(o) {
	this.shuffle = o;
	return this;
};

RealGravity.prototype.setToken = function(token) {
	this.token = token;
	return this;
};

RealGravity.prototype.setVideoAdSlots = function(adSlots) {
    this.videoAdSlots = adSlots;
    return this;
};

RealGravity.prototype.setPlayerAdHeader = function(adHeader) {
    this.playerAdHeader = adHeader;
    return this;
};


/**
 * Set the size of the player, valid values are strings that match
 * the RealGravity.SIZES object, or an object that matches the structure.
 * For example: { height: 700, width: 300, playlist: 450 } would be
 * a valid object parameter
 */
RealGravity.prototype.setSize = function(size) {
	this.playerSize = size;
	return this;
};

RealGravity.prototype.setSearchRadius = function(radius) {
        this.searchRadius = radius;
        return this;
};

RealGravity.prototype.setVideoDataCallBackDivs = function(divs) {
    this.videoDataCallBackDivs = divs;
    return this;
};

/**
 * Set the color schema of the player
 */
RealGravity.prototype.setPlayerBackColor = function(o) {
	this.fPlayerBackColor = o;
	return this;
};

RealGravity.prototype.setPlayerFrontColor = function(o) {
	this.fPlayerFrontColor = o;
	return this;
};

RealGravity.prototype.setPlayerLightColor = function(o) {
	this.fPlayerLightColor = o;
	return this;
};

RealGravity.prototype.setPlayerScreenColor = function(o) {
	this.fPlayerScreenColor = o;
	return this;
};

RealGravity.prototype.setPlayerPlayList = function(o) {
	this.fPlayerPlayList = o;
	return this;
};

RealGravity.prototype.setPlayerControlBar = function(o) {
	this.fPlayerControlBar = o;
	return this;
};

RealGravity.prototype.setPlayerSkin = function(o) {
	this.fPlayerSkin = o;
	return this;
};

/**
 * note: added to bookmarklet
 */
RealGravity.prototype.setPlayerAutoStart = function(o) {
	this.fPlayerAutoStart = o;
	return this;
};

RealGravity.prototype.setPlayerLogo = function(o) {
	this.fPlayerLogo = o;
	return this;
};


//RealGravity.prototype.setAdScript = function(o) {
//	this.adScript = o;
//	return this;
//};
//
//RealGravity.prototype.setAdDomain = function(o) {
//        this.adDomain;
//        return this;
//}

RealGravity.prototype.setPublisherChannel = function(o) {
	this.publisherChannel = o;
	return this;
};

RealGravity.prototype.setPublisher = function(o) {
        RealGravity.publisher = o;
};

RealGravity.prototype.setPlayerRepeat = function(o) {
	this.fPlayerRepeat = o;
	return this;
};

/**
 * note: added to bookmarklet
 */
RealGravity.prototype.setPlayerVolume = function(o) {
	this.fPlayerVolume = o;
	return this;
};

RealGravity.prototype.setPlayerAdMute = function(o) {
	this.fPlayerAdMute = o;
	return this;
};


RealGravity.prototype.setPageReference = function(o) {
	this.pageReference = o;
	return this;
};
RealGravity.prototype.setUSGeoBlocking = function(o) {
    this.usGeoBlocking = o;
    return this;
}

/**
 * initialize this instance, called by start
 * @private
 */
RealGravity.prototype.init = function() {
        RealGravity.loadSession();
        this.trackEvent(RealGravity.EVENT_INFO,"Script", "Starting", this.pageReference, 1);
        this.elapsedTimeCounter("Time to start");
        RealGravity.log("in start for: " + this.instanceId);

};

RealGravity.prototype.elapsedTimeCounter = function(message){
    var elapsedTime = Math.round((new Date().getTime() - this.scriptLoadTime)/1000);
    this.trackEvent(RealGravity.EVENT_INFO, "Script", message + " " + elapsedTime + " secs", this.pageReference, 1 );
};

RealGravity.loadSession = function() {
	if (RealGravity.sessionId == null) {
		var guid;
		if (guid = RealGravity.Cookie.read('_rg_session_id')) {
			RealGravity.sessionId = guid;
		} else {
			guid = RealGravity.generateGUID();
			// Lasts for a year
			RealGravity.Cookie.create('_rg_session_id', guid, 365);
			RealGravity.sessionId = guid;
		}
	}
};

/**
 * starts up this puppy
 */
RealGravity.prototype.start = function(element, replace) {

        // Get the User's country code
        RealGravity.loadLocation();

        // Load User's browser history
        RealGravity.loadHistory();

        if (this.mode == "location") RealGravity.findPageLocation();

	// get reference to container
	if (this.element != null) {
		//we already have reference, skip this step
	} else if (typeof element == 'string') {
		var el = document.getElementById(element);
		if (el != null) {
			if (replace) el.innerHTML = '';
			this.element = document.createElement('div');
			el.appendChild(this.element);
		} else {
			var self = this;
			setTimeout(function() {
				self.start(element, replace);
			}, 100);
			return;
		}
	} else if (element != null && element.appendChild) {
		this.element = document.createElement('div');
		element.appendChild(this.element);
	} else if (element == null || typeof element == 'undefined') {
		var id = "rg_" + Math.floor(Math.random() * 1000000);
		RealGravity.log("using document.write method id: " + id);
		document.write('<div id="' + id + '">RealGravity video placeholder</div>');
		this.element = document.getElementById(id);
	}

	if (this.token != null) {
		// load token, then forget it so next call to start
		// doesn't cause circles...
		var t = this.token;
		this.token = null;
                
                RealGravity.loadUrl('/vs/token/' + this.instanceId + '/' + t);
		return;
	}

	// now actually start
	this.init();


        // You only need to do this if you are not using the fixed mode.
//        if (this.mode != 'fixed'){
//            RealGravity.loadPublisher();
//        }


	RealGravity.log("in init for: " + this.instanceId);
	if (this.mode == "playlist") {

                var playlistURL = '/vs/static'
                if (this.usGeoBlocking) playlistURL += '/geo';
                playlistURL += '/1'
                    + '/' + this.index
                    + '/' + this.instanceId;
		for (var i=0; i<this.staticPlaylist.length; i++) {
			playlistURL += '/' + this.staticPlaylist[i];
		}
                playlistURL += "?hostname=" + RealGravity.publisher;
                
		RealGravity.loadUrl(playlistURL);
	} else if (this.mode == "manual") {
                var manualURL = '/vs/exact';
                if (this.usGeoBlocking) manualURL += '/geo';
                manualURL += '/1'
                        + '/' + this.index
                        + '/' + this.instanceId
                        + '/' + this.searchOrder
                        + '/' + this.dateRange
                        + '/' + this.providers
                        + '/' + this.resultCount
                        + this.context
                        + "?hostname=" + RealGravity.publisher;
		RealGravity.loadUrl(manualURL);
                this.trackEvent(RealGravity.EVENT_INFO,"Manual", this.context, this.pageReference,  1);
	} else if (this.mode == "fixed"){
            this.trackEvent(RealGravity.EVENT_INFO,"Fixed", this.context, this.pageReference,  1);

            if(this.geoBlockUser()) {
                RealGravity.locationBlocked(geoip_country_code());
            } else {
                // Show the player
                this.play(this.playlist);
            }

        } else
        {
                RealGravity.findPageLocation();
                this.awaitingStart = true;
	}
};

RealGravity.prototype.geoBlockUser = function() {

    if (typeof geoip_country_code == 'function') {
        if (geoip_country_code() != "US") return true;
         }
    return false;
}

/**
 * called when shared init code is ready
 */
RealGravity.prototype._start = function() {
	if (!this.started && this.awaitingStart) {
		this.started = true;
		RealGravity.log("in _start for: " + this.instanceId);

		if (!this.context)
			this.context = RealGravity.contextPath;

		var locationURL = '/vs/location'
                if (this.usGeoBlocking) locationURL += '/geo';
                locationURL += '/1'
				+ "/" + this.index
				+ "/" + this.instanceId
				+ "/" + this.searchOrder
				+ "/" + this.qualifiers		//hotels_beach_parks
				+ "/" + this.dateRange		//filter date range
				+ "/" + this.providers		//filter providers
				+ "/" + this.resultCount	//result set size
				// + "/" + location.hostname.match(/[0-9A-Za-z]/g).join("")
				+ "?lat=" + RealGravity.place.centroid.latitude // Latitude
                                + "&lng=" + RealGravity.place.centroid.longitude // Latitude
                                + "&place=" + RealGravity.place.name
                                + "&radius=" + this.searchRadius

                // Get the related videos
		RealGravity.loadUrl(locationURL);
                this.trackEvent(RealGravity.EVENT_INFO,"Location", this.context,this.pageReference,   1);
                this.trackEvent(RealGravity.EVENT_INFO,"Search Mode", this.mode, this.pageReference,  1);

	}
};

RealGravity.prototype.play = function(list) {
	this.play = function() {}; //so play only gets called once
	RealGravity.log("play for: " + this.instanceId);

        // If we've already created a playlist then don't do it again
        if (this.playlist.length == 0) {
            this.createPlaylist(list);
        }
	this.display();
	this.playerLoaded();
};


RealGravity.prototype.playerLoaded = function(){
        var cv = this.playlist[this.currentItem]
        this.updateVideoDivTags(cv);
        this.loadGa();
        this.elapsedTimeCounter("Player Loaded");
        this.loadQuantcast();
};

RealGravity.prototype.createPlaylist = function(videoCollection) {
	this.playlist = [];

        // Put it into the playlist in the same order we received it from the backend server.
	for(var v=0; v<videoCollection.length; v++) {
		var video = RealGravity.createRGVideo(videoCollection[v]);
		this.playlist.push(video);
	}

        if (this.useHistory){
	// reorder playlist based on history
            for (var i=RealGravity.history.length-1; i>=0; i--) {
                    var item = RealGravity.history[i];
                    var moveBack = null;
                    for (var j=0; j<this.playlist.length; j++) {
                            if (this.playlist[j].guid == item) {
                                    // assume no repeats, too hard,
                                    // plus will case repeats to go to end and play one after the other
                                    moveBack = this.playlist[j];
                                    this.playlist.splice(j, 1);
                                    break;
                            }
                    }
                    if (moveBack != null)
                            this.playlist.push(moveBack);
            }
        }

	if (this.shuffle) {
		// do the shuffle
		var tmp = null;
		var n = this.playlist.length;
		for (var i=0; i<n; i++) {
			var j = Math.floor(Math.random() * n);
			tmp = this.playlist[i];
			this.playlist[i] = this.playlist[j];
			this.playlist[j] = tmp;
		}
	}
	
/* Example of a playlist object: 
	duration:0
	start:0
	seektoposition:0
	position:0
	guid:39812be9edf5d0aaab1249255d9cb996
	percentComplete:0
	author:Video Passports
	enableAds:true
	description:Cruise line shore excursion featuring Glass Bottom Boat
	file:http://s3.amazonaws.com/videopassports/1252403352-499716385-1196483068.flv
	image:http://images.realgravity.com/thumb_3dec9ced2ad24bb8f637dbc0145efdeb.gif
	link:undefined
	title:Glass Bottom Boat
	tags:Cruise line shore excursion featuring Glass Bottom Boat

	for (var n=0; n < this.playlist.length; n++) {
		for (var o in this.playlist[n]) {
			RealGravity.log(o + ":" + this.playlist[n][o]);
   			document.getElementById('log').innerHTML += o + ":" + this.playlist[n][o] + "<br />";
   		}
	}
*/
};

RealGravity.grabContext2 = function() {
	var matches = [];
	var matchCount = 10;
	if (this.pageTags == null)
		this.pageTags = RealGravity.pageTags;
	var contentTags = this.pageTags.split(',');

	var kw = RealGravity.keywords;

	for (var i=0; i<contentTags.length && matches.length < matchCount; i++) {
		var tags = document.getElementsByTagName(contentTags[i]);
		var tagContent = [];
		for (var j=0; j<tags.length; j++) {
			var content = tags[j].innerHTML;
			tagContent.push(content.toLowerCase());
		}
		tagContent = tagContent.join(' ');

		// now see match with keywords we have
		for (var j=0; j<kw.length && matches.length<matchCount; j++) {
			if (tagContent.indexOf(kw[j].word) >= 0) {
				if (!contains(matches, kw[j])) {
					matches.push(kw[j]);
				}
			}
		}
	}

	var tmp = '';

	for (var i=0; i<matches.length; i++) {
		tmp += '/' + matches[i].word.replace(/ /gi, "/");
	}
	// TODO: set to something known when nothing matches?
	RealGravity.contextPath = tmp;

	function contains(array, value) {
		for (var i=0; i<array.length; i++)
			if (array[i] == value)
				return true;
		return false;
	}
};

RealGravity.prototype.determineDisplaySize = function() {
	if (typeof this.playerSize == 'string') {
		this.playerSize = RealGravity.SIZES[this.playerSize];
	}
	return this.playerSize;
};

RealGravity.prototype.display = function() {
	if (this.playlist.length > 0) {
		// Determine size
		var size = this.determineDisplaySize();
		var flashVars = "skin=" + RealGravity.FLASH_SKIN_DIR + this.fPlayerSkin + ".swf"
				+ "&autostart=" + (this.fPlayerAutoStart?'true':'false')
				+ "&controlbar=" + this.fPlayerControlBar
				+ "&backcolor=" + this.fPlayerBackColor
				+ "&frontcolor=" + this.fPlayerFrontColor
				+ "&lightcolor=" + this.fPlayerLightColor
				+ "&screencolor=" + this.fPlayerScreenColor
				+ "&dock=true"
				+ "&icons=true"
				+ "&smoothing=true"
				+ "&stretching=uniform"
				+ "&repeat=" + this.fPlayerRepeat
				+ "&playlist=" + this.fPlayerPlayList
				+ "&playlistsize=" + size.playlist
				+ "&volume=" + this.fPlayerVolume
                + "&mute=" + this.fPlayerAdMute
				+ "&abouttext=RealGravity Player 1.0"
				+ "&aboutlink=http://mediacast.realgravity.com/"
				+ "&logo.file=http://dlh-pro.local/~dlh/Clients/RealGravity/v20100903JW52/realgravity_logo.jpg"
				+ "&logo.link=http://mediacast.realgravity.com"
				+ "&logo.linktarget=_blank"
				+ "&logo.hide=false"
				+ "&logo.position=top-left"
				+ "&logo.timeout=10"
				+ "&sharing.link=true"
				+ "&sharing.code=true"
				+ "&id=" + RealGravity.ID_PREFIX + this.instanceId // linux fix
                                + "&instance_id=" + this.instanceId
				+ "&session_id=" + RealGravity.sessionId;

		// Moved to here so that debugging can override ad parameters
		if (RealGravity.pluginDebug == "_debug" ) {
			RealGravity.playAds = true;

			// daveh - RG & YuMe domains
			//RealGravity.adDomain = '345hgNMyvjS'; 	// http://kirktest.vibe.com/
			//RealGravity.adDomain = '303byFTzesG'; 	// http://www.cambria.trackandfieldnews.com/
			//RealGravity.adDomain = '291fwVaUmpP' 		// http://lookbook.nu production
			//RealGravity.adDomain = '250prxPoyjX'; 	// YuMe VAST Test
			//RealGravity.adDomain = '250rknFRDFd'; 	// RG Test
			RealGravity.adDomain = '88ElOFHxAh';		// YuMe QA Test
			//RealGravity.adDomain = '240xeGghkMC';		// RG Production
			
			// daveh - YuMe servers
			//RealGravity.adServer = 'http://pl.yumenetworks.com';				// YuMe production
			RealGravity.adServer = 'http://shadow01.yumenetworks.com'		// YuMe test
		}
		

		// Set the Advertiser's flash '
		if (RealGravity.playAds){
			flashVars += "&plugins=sharing-2,"  + RealGravity.FLASH_BASE_PATH + "rg_ads" + RealGravity.pluginDebug + ".swf"
				+ "&rg_ads" + RealGravity.pluginDebug + ".position=top"
				+ "&rg_ads" + RealGravity.pluginDebug + ".size=30"

				+ "&rg_ads" + RealGravity.pluginDebug + ".yume_domain=" + RealGravity.adDomain
				+ "&rg_ads" + RealGravity.pluginDebug + ".yume_imu=" + RealGravity.YUME_IMU
	            + "&rg_ads" + RealGravity.pluginDebug + ".yume_base=" + RealGravity.FLASH_BASE_PATH
				+ "&rg_ads" + RealGravity.pluginDebug + ".yume_leader_slot=1"
	
				// Set the size of the player so we don't have to infer--there is a know issue with IE/Flash for size info.'
				+ "&rg_ads" + RealGravity.pluginDebug + ".size.width=" + size.width
				+ "&rg_ads" + RealGravity.pluginDebug + ".size.height=" + size.height
				+ "&rg_ads" + RealGravity.pluginDebug + ".size.playlist=" + size.playlist
			
	            + "&rg_ads" + RealGravity.pluginDebug + ".jscallbackid=" + "RealGravity.instances[" + this.instanceId + "].adEvent"
	            // Video title information
	            + "&rg_ads" + RealGravity.pluginDebug + ".includevideotitle=" + this.playerVidTitle.video_title
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitleheight=" + this.playerVidTitle.video_title_height
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitlehtml=" + this.playerVidTitle.video_title_html
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitlecss=" + this.playerVidTitle.video_title_css
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitleheader=" + this.playerVidTitle.video_title_header_text
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitlebody=" + this.playerVidTitle.video_title_body_text
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitleautohide=" + this.playerVidTitle.video_title_autohide
				+ "&rg_ads" + RealGravity.pluginDebug + ".videotitleeffect=" + this.playerVidTitle.video_title_effect
	
				// Ad header information
				+ "&rg_ads" + RealGravity.pluginDebug + ".includeadheader=" + this.playerAdHeader.ad_header
				+ "&rg_ads" + RealGravity.pluginDebug + ".headertitle=" + this.playerAdHeader.ad_header_title
				+ "&rg_ads" + RealGravity.pluginDebug + ".headerbackgroundcolor=" + this.playerAdHeader.ad_header_background_color
				+ "&rg_ads" + RealGravity.pluginDebug + ".headerforegroundcolor=" + this.playerAdHeader.ad_header_foreground_color
	
				// Ad slots information
				+ "&rg_ads" + RealGravity.pluginDebug + ".pre_playlisturl=" + RealGravity.adServer + RealGravity.YUME_PRE_ROLL_PATH
				+ "&rg_ads" + RealGravity.pluginDebug + ".ovr_playlisturl=" + RealGravity.adServer + RealGravity.YUME_GRAPHIC_OVERLAY_PATH
				+ "&rg_ads" + RealGravity.pluginDebug + ".ovr_start=" + RealGravity.YUME_OVERLAY_START
				+ "&rg_ads" + RealGravity.pluginDebug + ".mid_playlisturl=" + RealGravity.adServer + RealGravity.YUME_MID_ROLL_PATH
				+ "&rg_ads" + RealGravity.pluginDebug + ".post_playlisturl=" + RealGravity.adServer + RealGravity.YUME_POST_ROLL_PATH
				+ "&rg_ads" + RealGravity.pluginDebug + ".prerolladslot=" + this.videoAdSlots.preroll_ad_slot
				+ "&rg_ads" + RealGravity.pluginDebug + ".prerolladfreq=" + this.videoAdSlots.preroll_ad_freq
				+ "&rg_ads" + RealGravity.pluginDebug + ".overlayadslot=" + this.videoAdSlots.overlay_ad_slot
				+ "&rg_ads" + RealGravity.pluginDebug + ".overlayadfreq=" + this.videoAdSlots.overlay_ad_freq
				+ "&rg_ads" + RealGravity.pluginDebug + ".midrolladslot=" + this.videoAdSlots.midroll_ad_slot
				+ "&rg_ads" + RealGravity.pluginDebug + ".midrolladfreq=" + this.videoAdSlots.midroll_ad_freq
				+ "&rg_ads" + RealGravity.pluginDebug + ".overlay2adslot=" + this.videoAdSlots.overlay2_ad_slot
				+ "&rg_ads" + RealGravity.pluginDebug + ".overlay2adfreq=" + this.videoAdSlots.overlay2_ad_freq
				+ "&rg_ads" + RealGravity.pluginDebug + ".postrolladslot=" + this.videoAdSlots.postroll_ad_slot
				+ "&rg_ads" + RealGravity.pluginDebug + ".postrolladfreq=" + this.videoAdSlots.postroll_ad_freq;
			;
		}
		
		if (RealGravity.pluginDebug != "") {
			    var debugDiv = document.getElementById(RealGravity.pluginDebug);
			    if (debugDiv != null) debugDiv.innerHTML = "<iframe src='console.html' width='475' height='515'></iframe>";
		}

                if (typeof this.publisherChannel != 'undefined'){
			flashVars += "&rg_ads" + RealGravity.pluginDebug + ".yume_pubchannel=" + this.publisherChannel;
                }


		if(typeof this.fPlayerLogo != 'undefined'){
			flashVars += "&logo=" + this.fPlayerLogo;
		}

		RealGravity.log("in display: " + this.instanceId);
		var playerHTML = this.createPlayerDiv(flashVars, size);
                this.element.innerHTML = playerHTML;
	}
};

RealGravity.prototype.createPlayerDiv = function (flashVars, playerSize){

    var markup = [];

    // This actually creates the embed code.
    var embedCode = RealGravity.embedCode
				.replace('$FLASH_VARS', flashVars)
				.replace(/\$ID/g, this.instanceId)
                            	.replace('$WIDTH', playerSize.width)
				.replace('$HEIGHT', playerSize.height);

    var companionAdDiv = '<div id="cb_medrect1_div" style="' + this.companionAdStyleString;

    var adIFrame = '<iframe width="300" height="250" frameborder="0" scrolling="no" allowtransparency="true" '
                 + 'leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" '
                 + 'id="cb_medrect1_frame" name="cb_medrect1_frame"></iframe>';

    var cleanUpDiv = '<div id="RealGravity_clean_up" style="clear: both;"> </div>';


//<div id="RealGravity_title"> Title:<span id="RealGravity.video.title"></span></div>
//        <div id="RealGravity_descriptions"> Description:<span id="RealGravity.video.description"></span></div>
//        <div id="RealGravity_tags"> Tags:<span id="RealGravity.video.tags"></span></div>
    if (this.playerHeader){

        if (navigator.appName == 'Microsoft Internet Explorer') {
            headerWidth = playerSize.width - 1;
	}
        else
        {
           headerWidth = playerSize.width - 10;
        }
        var header = '<div id="RealGravity_header" style="'+ this.playerHeaderStyle 
            + ' width:' + headerWidth + ';">'
            + this.playerHeaderTitle
            + ' <span id="RealGravity.video.title" style="' + this.playerHeaderTitleStyle +'"></span>'
            + '</div>'
        markup.push(header)
    }
 

    if (this.companionAd){
        
        // Determine where the companion ad should go
        switch(this.companionAdPosition){
            case 3:            // Right
                markup.push('<div id="RGVideoNode_'+ this.instanceId + '" style="float: left;">');
                markup.push(embedCode);
                markup.push('</div>');
                markup.push(companionAdDiv + 'float: left;">')
                markup.push(adIFrame);
                markup.push('</div>');
                markup.push(cleanUpDiv);
                break;
            
            default:  // We will default to bottom or 4
                markup.push('<div id="RGVideoNode_'+ this.instanceId + '">');
                markup.push(embedCode);
                markup.push('</div>');
                markup.push(companionAdDiv + '">');
                markup.push(adIFrame);
                markup.push('</div>');
                markup.push(cleanUpDiv);
                break;
        }
    }

    else{
        markup.push('<div id="RGVideoNode_'+ this.instanceId + '">');
        markup.push(embedCode);
        markup.push('</div>');
    }

    return markup.join('');
};

RealGravity.prototype.setCompanionAd = function (adPosition, styleJson, styleString){
    this.companionAd = true;
    this.companionAdPosition = adPosition;
    this.companionAdStyleJson = styleJson;
    this.companionAdStyleString = styleString;
    return this;
};

RealGravity.prototype.setPlayerHeader = function(headerStyle, headerTitle, titleStyle){
    this.playerHeaderStyle = headerStyle;
    this.playerHeaderTitle = headerTitle;
    this.playerHeaderTitleStyle = titleStyle;
    this.playerHeader = true;
    return this;
};

/**
 * gets called when flash player gets loaded, we attach event handlers here
 * so they point directly to this object
 */
RealGravity.prototype.prepPlayer = function(player) {
	RealGravity.log("Prepping Player: adding listeners ");
        var selfRef = 'RealGravity.instances[' + this.instanceId + ']';
	this.player = player;
	// JW Player event listeners

	player.addControllerListener("VOLUME", selfRef + ".volumeHandler");
	// We don't need to keep track of this.
        //player.addControllerListener("MUTE", selfRef + ".muteHandler");
	player.addControllerListener("ITEM", selfRef + ".itemHandler");
	player.addModelListener("ERROR", selfRef + ".errorHandler");
	player.addModelListener("STATE", selfRef + ".stateHandler");
	player.addModelListener("TIME", selfRef + ".timeHandler");
	// This actiually loads the playlist into JW Player. The playlist is not loaded via FLASHVARS
	player.sendEvent('LOAD', this.playlist);
//	player.sendEvent('LOAD', 'http://dlh-pro.local/~dlh/Clients/RealGravity/v20100903JW52/xspfPlaylist.xml');
};

RealGravity.prototype.volumeHandler = function(obj) {
	this.trackEvent(RealGravity.EVENT_INFO,"Sound", "Volume", this.pageReference, 1);
};

RealGravity.prototype.muteHandler = function(obj) {
	//update current item
	this.state = obj.state;
	this.trackEvent(RealGravity.EVENT_INFO,"Sound", "Mute " + this.state, this.pageReference, 1);
};


RealGravity.prototype.itemHandler = function(obj) {
        RealGravity.log("itemHandler: playlist item =>" + obj.index);
        this.currentItem = obj.index;
	var cv = this.playlist[this.currentItem];
	if (this.currentItem !=0) {
            this.trackEvent(RealGravity.EVENT_INFO,"Playlist pick", this.pageReference, cv.file,  1);
        }
};

RealGravity.prototype.timeHandler = function(obj) {
	// Only count in increments of 20%
        var current_video_complete = Math.floor(Math.floor((obj.position / obj.duration)*10)*10/20);

	// Check to see if we've already reported this percentage
	var cv = this.playlist[this.currentItem];
	if (cv.percentComplete != current_video_complete) {
		// Get the current video
		// Set update the current completion
		cv.percentComplete = current_video_complete;
		if (isNaN(current_video_complete)) current_video_complete = 0;

		this.RGTrackEvent(RealGravity.EVENT_INFO,"Stream Progress", this.pageReference, cv.file,  (current_video_complete*20));
	}
};

RealGravity.prototype.errorHandler = function(obj) {
	var currentVideo = this.playlist[this.currentItem];
	// Add it to their watched list, because they wont want to see it again
	RealGravity.addWatched(currentVideo.guid);
	this.trackEvent(RealGravity.EVENT_ERROR,"Error", this.pageReference, cv.file + " -> "+ escape(obj.message), 1);
};

RealGravity.prototype.stateHandler = function(obj) {
	var current_video_complete = Math.floor((obj.position / obj.duration)*10)*10;
	RealGravity.log("stateHandler: " + obj.newstate);
	if (/*obj.newstate == 'BUFFERING' || */obj.newstate == 'PLAYING' || obj.newstate == "PAUSED") {
		//update current item
            var currentVideo = this.playlist[this.currentItem];
            RealGravity.addWatched(currentVideo.guid);

            if (isNaN(current_video_complete)) current_video_complete = 0;

            // only record "Streams" event when we are actually playing and not paused.
            if (obj.newstate == "PLAYING") {
                if (this.currentVideo == null || currentVideo.guid != this.currentVideo.guid){
                    this.trackEvent(RealGravity.EVENT_REVENUE, "Streams", this.pageReference, currentVideo.file, 1);

                    // We want to keep track of ad inventory available based on the size of the player
                    var sizeString = "w:" + this.playerSize.width + " h:" + this.playerSize.height + " pl:" + this.playerSize.playlist;
                    this.trackEvent(RealGravity.EVENT_INFO,"Ads", sizeString , this.pageReference, 1);
                    this.currentVideo = currentVideo;
                }
            }
            if (obj.newstate == "PAUSED") {
                this.RGTrackEvent(RealGravity.EVENT_INFO, "Stream paused", this.pageReference, currentVideo.file, 1);
            }

            // Update the header
            this.updateVideoDivTags(currentVideo);

	}
};

// This is the RealGravity ad_playing callback method
RealGravity.prototype.adEvent = function(instanceId, adDuration, adType, adPresent) {

        switch(adPresent) {
            case -6: this.trackEvent(RealGravity.EVENT_ERROR,"Ads", "Unknown Event: " + adType, this.pageReference, 1); break;
            case -5: this.trackEvent(RealGravity.EVENT_ERROR,"Ads", "Yume Plugin Load Failure: " + adType, this.pageReference, 1); break;
            case -4: this.trackEvent(RealGravity.EVENT_ERROR,"Ads", "Error: " + adType, this.pageReference, 1); break;
            case -3: this.trackEvent(RealGravity.EVENT_ERROR,"Ads", "Domain Invalid: " + adType, this.pageReference, 1); break;
            case -2: this.trackEvent(RealGravity.EVENT_ERROR,"Ads", "No Add Call: " + adType, this.pageReference, 1); break;
            case -1: this.trackEvent(RealGravity.EVENT_REVENUE,"Ads", "Skipped: " + adType, this.pageReference, 1); break;
            case 0: this.trackEvent(RealGravity.EVENT_REVENUE,"Ads", "Absent: " + adType, this.pageReference, 1); break;
            case 1: this.trackEvent(RealGravity.EVENT_REVENUE,"Ads", "Present: " + adType, this.pageReference, 1); break;
            case 2: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "RG Plugin Loads: " + adType, this.pageReference, 1); break;
            case 3: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Yume Plugin Loads: " + adType, this.pageReference, 1); break;
            case 4: this.trackEvent(RealGravity.EVENT_REVENUE,"Ads", "Completed: " + adType, this.pageReference, 1); break;
            case 5: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Closed: " + adType, this.pageReference, 1); break;
            case 6: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Reopened: " + adType, this.pageReference, 1); break;
            case 7: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Clicked 2 Video: " + adType, this.pageReference, 1); break;
            case 8: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "PIP Video Completed: " + adType, this.pageReference, 1); break;
            case 9: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Image Closed: " + adType, this.pageReference, 1); break;
            case 10: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Clicked 2 Site: " + adType, this.pageReference, 1); break;
            case 11: this.trackEvent(RealGravity.EVENT_REVENUE,"Ads", "Companion Banner Event: " + adType, this.pageReference, 1); break;
            default: this.trackEvent(RealGravity.EVENT_INFO,"Ads", "Other: " + adType , this.pageReference, 1);
        }
};


RealGravity.locationBlocked = function(location){
		var errorHtml ="The video(s) you've requested can't be viewed outside the US."
		+ " Your location => " + location
		+ "  is outside the US ";
		//alert(errorHtml);

};

RealGravity.updatePageDivTags = function(element, name){
    var el = document.getElementById(element);
    if (el != null) el.innerHTML = name;
};

RealGravity.prototype.updateVideoDivTags = function (currentVideo) {
   // Update video name
    if (this.videoDataCallBackDivs != null && currentVideo != null) {
        RealGravity.updatePageDivTags(this.videoDataCallBackDivs.title, currentVideo.title);
        RealGravity.updatePageDivTags(this.videoDataCallBackDivs.description, currentVideo.description);
        RealGravity.updatePageDivTags(this.videoDataCallBackDivs.tags, currentVideo.tags);
    }

};


RealGravity.stringTrim = function(str) {
	var reL = /\s*((\S+\s*)*)/;
	str = str.replace(reL, "$1");

	var reR = /((\s*\S+)*)\s*/;
	str = str.replace(reR, "$1");

	return str;
};

/**
 * Allow end user to specify a custom context instead of searching for it
 * note: added to bookmarklet
 */
RealGravity.prototype.setContext = function(ctx) {
        ctx = ctx.split(",");
	for (var i=0; i<ctx.length; i++) {
		ctx[i] = RealGravity.stringTrim(ctx[i]);
	}
	ctx = ctx.join("/");
	if (ctx.charAt(0) != "/")
		ctx = "/" + ctx;
	this.context = ctx;
	return this;
};

/** NOTE: remove */
RealGravity.prototype.setStrictMode = function(bln) {
	this.strict = bln;
	return this;
};



RealGravity.addWatched = function(id) {
	//TODO: remove it first if already in history
	RealGravity.history.unshift(id);

	// clean history, remove dupes
	var tmp = RealGravity.history;
	RealGravity.history = [];
	var seen = {};
	for (var i=0; i<tmp.length && RealGravity.history.length < RealGravity.historySize; i++) {
		var item = tmp[i];
		if (!seen[item]) {
			RealGravity.history.push(item);
			seen[item] = true;
		}
	}

	//TODO: serialize
	RealGravity.Cookie.create(RealGravity.COOKIE_WATCHED, RealGravity.history.join("|"), 1);
	RealGravity.log("history contains: " + RealGravity.history.join("|"));
};

/* parseUri JS v0.1, by Steven Levithan (http://badassery.blogspot.com)
Splits any well-formed URI into the following parts (all are optional):
----------------------
- source (since the exec() method returns backreference 0 [i.e., the entire match] as key 0, we might as well use it)
- protocol (scheme)
- authority (includes both the domain and port)
    - domain (part of the authority; can be an IP address)
    - port (part of the authority)
- path (includes both the directory path and filename)
    - directoryPath (part of the path; supports directories with periods, and without a trailing backslash)
    - fileName (part of the path)
- query (does not include the leading question mark)
- anchor (fragment)
*/
RealGravity.parseUri = function (sourceUri){
    var uriPartNames = ["source","protocol","authority","domain","port","path","directoryPath","fileName","query","anchor"];
    var uriParts = new RegExp("^(?:([^:/?#.]+):)?(?://)?(([^:/?#]*)(?::(\\d*))?)?((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[\\?#]|$)))*/?)?([^?#/]*))?(?:\\?([^#]*))?(?:#(.*))?").exec(sourceUri);
    var uri = {};

    for(var i = 0; i < 10; i++){
        uri[uriPartNames[i]] = (uriParts[i] ? uriParts[i] : "");
    }

    // Always end directoryPath with a trailing backslash if a path was present in the source URI
    // Note that a trailing backslash is NOT automatically inserted within or appended to the "path" key
    if(uri.directoryPath.length > 0){
        uri.directoryPath = uri.directoryPath.replace(/\/?$/, "/");
    }

    return uri;
}

RealGravity.createRGVideo = function(videoObject) {

	var video = videoObject.video;
	var playlistVideo = {};
	playlistVideo.duration = 0.0;

	// daveh - Always set both of these
	// 	start is for streaming video (YouTube)
	// 	seektopoistion is for progressive video (Travelistic)
	// values should come from the playlist - this is for testing
	playlistVideo.start = 0;
    playlistVideo.seektoposition = 0;
    
    // daveh - this is required to make JW 5.2 play content properly
    
    playlistVideo.provider = "http";

	playlistVideo.position = 0.0;
	playlistVideo.guid = video.guid;
	playlistVideo.percentComplete = 0;

	// We want to credit the service as the author of the video
	playlistVideo.author = RealGravity.providersInfo[video.provider_id - 1].provider.name;
	//playlistVideo.author = video.owner;

        playlistVideo.enable_ads = RealGravity.providersInfo[video.provider_id - 1].provider.enable_ads;
//        playlistVideo.enable_ads = false;

	playlistVideo.description = video.description;

        // Check to see if we should use the CDN url or file url
        if (RealGravity.providersInfo[video.provider_id - 1].provider.use_cdn){
            playlistVideo.file = RealGravity.providersInfo[video.provider_id - 1].provider.cdn_proxy_video_url
                                + RealGravity.parseUri(video.file_url).path;

            playlistVideo.image = RealGravity.providersInfo[video.provider_id - 1].provider.cdn_proxy_image_url
                                + RealGravity.parseUri(video.thumbnail_url).path;
        }
        else {
            playlistVideo.file = video.file_url || video.url;
            playlistVideo.image = video.thumbnail_url;
        }
	playlistVideo.link = video.clickthrough_url;
	playlistVideo.title = video.title;
	playlistVideo.tags = video.tag_list;

	// Check to see if this is a youtube video. If so we need to change
	// The type so it works with JWPlayer 4.3 and later
	if (video.service == "youtube") {
		playlistVideo.type = "youtube";
	}
	return playlistVideo;
}

// Cookies
RealGravity.Cookie = {
	create : function(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	},
	read : function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		var ret = null;
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) {
				ret = c.substring(nameEQ.length,c.length);
				break;
			}
		}
		return ret;
	},
	clear : function(name) {
		RealGravity.Cookie.create(name,"",-1);
	}
};

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
        var data = o.query.results.matches || {'error':'no locations found'};
        RealGravity.Placemaker.callback(data);
    }
};


// Onload hook. Init your event handlers here.
function playerReady(thePlayer) {
	var tmp = thePlayer.id;
	var index = -1;
	var i = tmp.indexOf(RealGravity.ID_PREFIX);
	if (i >= 0) {
		index = parseInt(tmp.substring(i+RealGravity.ID_PREFIX.length));
		//var player = document.getElementById(thePlayer.id);
                var RGInstance =  RealGravity.instances[index];
                RGInstance.prepPlayer(document.getElementById(thePlayer.id));
                RGInstance.trackEvent(RealGravity.EVENT_REVENUE,"Player", "Impression", RGInstance.pageReference, 1);

                // Check to see if they are using the new YuMe scripts. If they are then trigger this methods.
                if (typeof yumeAdPlayer != 'undefined') {
                    yumeAdPlayer(RealGravity.adServer, RealGravity.adDomain);
                }
	}
}


