// Properties for RealGravity Class
function RealGravity() {
	RealGravity.scriptId = 0;
	RealGravity.locationUrl = "";
	RealGravity.sessionId = null;
	RealGravity.adDomain = "";
	RealGravity.videoGuid = "";
}

// Variables
RealGravity.LOG_ID = "_rglog_";

// Determine if Publisher has been set outside of the script if not, determine it.
if (typeof RealGravity.publisher == 'undefined'){
    RealGravity.publisher = location.hostname;
}


// +++++++++++++++++++++++++++++++++
// RealGravity Setters
// +++++++++++++++++++++++++++++++++

RealGravity.prototype.setMode = function(mode) {
	this.mode = mode;
	return this;
};

RealGravity.prototype.setToken = function(value) {
	this.token = value;
	return this;
};

RealGravity.prototype.setPlaylistUUID = function(value) {
	this.playlistUUID = value;
	return this;
};

RealGravity.prototype.setAcudeoProgId = function(value) {
	this.progId = value;
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

RealGravity.loadSession = function() {
	if (RealGravity.sessionId == null) {
		var guid;
		if (guid == RealGravity.Cookie.read('_rg_session_id')) {
			RealGravity.sessionId = guid;
		} else {
			guid = RealGravity.generateGUID();
			// Lasts for a year
			RealGravity.Cookie.create('_rg_session_id', guid, 365);
			RealGravity.sessionId = guid;
		}
	}
};

RealGravity.pageRef = function() {
	try
  {
      RealGravity.pageReference = top.location.href;
  }
  catch(err)
  {
      RealGravity.pageReference = window.location.href;
  }
}

RealGravity.generateGUID = function() {
	RealGravity.log("generating guid");
	var result = [];
	for(var j=0; j<32; j++) {
		result.push(Math.floor(Math.random()*16).toString(16));
	}
	return result.join('');
};

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

// Make the ajax request to the backend  
RealGravity.loadUrl = function(url, omitRg) {
	if (!omitRg) {
		// url = "http://realgravity.com/" + url;
		url = "http://localhost:3000/" + url;
	}
	RealGravity.log("load url: " + url);
	var head = document.getElementsByTagName("head").item(0);
	script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	script.setAttribute('id', 'YJscriptId' + RealGravity.scriptId++);
	head.appendChild(script);
};

// event tracking
RealGravity.RGTrackEvent = function(type, category, action, label, counter){

    var videoGuid = "null"
    var countryCode = "null"

    var newUrl = "/events"
            + "?rg_type=" + type
            + "&rg_publisher=" + "Hi5.com"
            + "&rg_ad_domain_id=" + RealGravity.adDomain
            + "&rg_guid=" + RealGravity.videoGuid
            + "&rg_session=" + RealGravity.sessionId
            + "&rg_user_country_code=" + countryCode
            + "&rg_category=" + category
            + "&rg_action=" + action
            + "&rg_lable=" + label
            + "&rg_counter=" + counter;

    // Make call to backend.
    RealGravity.loadUrl(newUrl);
};

// Determine the player mode and send request for the player embed to the backend
RealGravity.prototype.start = function(element) {
	
  RealGravity.loadSession();
	RealGravity.pageRef();

	// Determine how the player was called
	var path = new Array();
	path.push("get_flowplayer");
	path.push(this.token);
	path.push(this.playlistUUID);
	path.push(this.progId);
	path.push(element);
	var url = path.join('/');

	RealGravity.loadUrl(url,false);
}


