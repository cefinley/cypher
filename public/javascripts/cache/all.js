var n_rand=Math.floor(Math.random()*100001);var rand_st="&rand="+n_rand;
var u="undefined";var t="true";var f="false";var n="null";var _cb=new _cb();var hObj=new hObj();var pl=new pl();
var div_m,div_w,div_l,div_f,div_i,z6,z7;
function pl(){
pl.prototype.gS=gS;
// Setup for validation of source input.
function gS(i){var j=typeof i;var s;(j==='undefined')?s="undefined":s="true";return s;}
}
function hObj(){hObj.prototype.nS=nS;
	function nS(i){try{(document.getElementById(i.toString()).id!=n)?this.c3=f:this.c3=t;}catch(e){this.c3=t}return this.c3;}
}
function yumeStaticCbAd(){
	this.setPlayerMediumRectangleCompanionBannerDivSource=_cb.setPlayerMediumRectangleCompanionBannerDivSource;
	this.setPlayerWideSkyCompanionBannerDivSource=_cb.setPlayerWideSkyCompanionBannerDivSource;
	this.setPlayerLeaderBoardCompanionBannerDivSource=_cb.setPlayerLeaderBoardCompanionBannerDivSource;
	this.setPlayerInPlayerCompanionBannerInPageDivSource=_cb.setPlayerInPlayerCompanionBannerInPageDivSource;
	this.setPlayerFBCompanionBannerDivSource=_cb.setPlayerFBCompanionBannerDivSource;
	this.getPlayerMediumRectangleCompanionBannerDivSource=_cb.getPlayerMediumRectangleCompanionBannerDivSource;
	this.getPlayerWideSkyCompanionBannerDivSource=_cb.getPlayerWideSkyCompanionBannerDivSource;
	this.getPlayerLeaderBoardCompanionBannerDivSource=_cb.getPlayerLeaderBoardCompanionBannerDivSource;
	this.getPlayerInPlayerCompanionBannerInPageDivSource=_cb.getPlayerInPlayerCompanionBannerInPageDivSource;
	this.getPlayerFBCompanionBannerDivSource=_cb.getPlayerFBCompanionBannerDivSource;
	this.setPlayerIframeBannerPlaylist=_cb.setPlayerIframeBannerPlaylist;
	this.getPlayerIframeBannerPlaylist=_cb.getPlayerIframeBannerPlaylist;
	this.setPlayerAdDomainUrl=_cb.setPlayerAdDomainUrl;
	this.getPlayerAdDomainUrl=_cb.getPlayerAdDomainUrl;
}
function _cb(){
	_cb.prototype.setPlayerMediumRectangleCompanionBannerDivSource=setPlayerMediumRectangleCompanionBannerDivSource;
    _cb.prototype.getPlayerMediumRectangleCompanionBannerDivSource=getPlayerMediumRectangleCompanionBannerDivSource;
	function setPlayerMediumRectangleCompanionBannerDivSource(i){(hObj.nS(i)==f)?div_m=i:div_m="null";}
	function getPlayerMediumRectangleCompanionBannerDivSource(){(hObj.nS(div_m)==t)?div_m="null":div_m=div_m;return div_m;}

	// Setup Yume WideSky Companion Banner DIV Source
	_cb.prototype.setPlayerWideSkyCompanionBannerDivSource=setPlayerWideSkyCompanionBannerDivSource;
    _cb.prototype.getPlayerWideSkyCompanionBannerDivSource=getPlayerWideSkyCompanionBannerDivSource;
	function setPlayerWideSkyCompanionBannerDivSource(i){(hObj.nS(i)==f)?div_w=i:div_w="null";}
	function getPlayerWideSkyCompanionBannerDivSource(){(hObj.nS(div_w)==t)?div_w="null":div_w=div_w;return div_w;}

	// Setup Yume Fullbanner Companion Banner DIV Source
	_cb.prototype.setPlayerFBCompanionBannerDivSource=setPlayerFBCompanionBannerDivSource;
    _cb.prototype.getPlayerFBCompanionBannerDivSource=getPlayerFBCompanionBannerDivSource;
	function setPlayerFBCompanionBannerDivSource(i){(hObj.nS(i)==f)?div_f=i:div_f="null";}
	function getPlayerFBCompanionBannerDivSource(){(hObj.nS(div_f)==t)?div_f="null":div_f=div_f;return div_f;}

	// Setup Yume LeaderBoard Companion Banner DIV Source
	_cb.prototype.setPlayerLeaderBoardCompanionBannerDivSource=setPlayerLeaderBoardCompanionBannerDivSource;
    _cb.prototype.getPlayerLeaderBoardCompanionBannerDivSource=getPlayerLeaderBoardCompanionBannerDivSource;
	function setPlayerLeaderBoardCompanionBannerDivSource(i){(hObj.nS(i)==f)?div_l=i:div_l="null";}
	function getPlayerLeaderBoardCompanionBannerDivSource(){(hObj.nS(div_l)==t)?div_l="null":div_l=div_l;return div_l;}

	// Setup Static HTML Page Yume InPlayer Companion Banner DIV Source
	_cb.prototype.setPlayerInPlayerCompanionBannerInPageDivSource=setPlayerInPlayerCompanionBannerInPageDivSource;
    _cb.prototype.getPlayerInPlayerCompanionBannerInPageDivSource=getPlayerInPlayerCompanionBannerInPageDivSource;
	function setPlayerInPlayerCompanionBannerInPageDivSource(i){(hObj.nS(i)==f)?div_i=i:div_i="null";}
	function getPlayerInPlayerCompanionBannerInPageDivSource(){(hObj.nS(div_i)==t)?div_i="null":div_i=div_i;return div_i;}
	// Setup Player Iframe banner playlist
	_cb.prototype.setPlayerIframeBannerPlaylist=setPlayerIframeBannerPlaylist;
	_cb.prototype.getPlayerIframeBannerPlaylist=getPlayerIframeBannerPlaylist;
	function setPlayerIframeBannerPlaylist(i){(i!=" ")?z6=i:z6=n;}
	function getPlayerIframeBannerPlaylist(){(pl.gS(z6)==u)?z6=n:z6=z6;return z6;}
	_cb.prototype.setPlayerAdDomainUrl=setPlayerAdDomainUrl;
	_cb.prototype.getPlayerAdDomainUrl=getPlayerAdDomainUrl;
	function setPlayerAdDomainUrl(i){(i!=" ")?z7=i:z7=n;}
	function getPlayerAdDomainUrl(){(pl.gS(z7)==u)?z7=n:z7=z7;return z7;}
	//Setup Yume Ad Banner Iframe Url
	_cb.prototype.setBannerUrl=setBannerUrl;
	_cb.prototype.getBannerUrl=getBannerUrl;
	function setBannerUrl(w,h,i){

		if(pl.gS(w)!=u&&pl.gS(h)!=u&&pl.gS(i)!=u) {
			if(w.toString()==""&&h.toString()==""&&i.toString()==""){
				this.a56= "";
			}else{

				if(_cb.getPlayerIframeBannerPlaylist().toString()!=n){
					this.a56=_cb.getPlayerAdDomainUrl();
					if(pl.gS(_cb.getPlayerIframeBannerPlaylist())!=u&&this.a56.indexOf("&")==-1){this.a56 += _cb.getPlayerIframeBannerPlaylist().toString();}
					this.a56 += rand_st;
					if(w>0){this.a56 += "&width="+w;}
					if(h>0){this.a56 += "&height="+h;}
					this.a56 += "&imu="+i;
				}else{this.a56=n;}

			}
		}else{this.a56= n;}

	}
	function getBannerUrl(){return this.a56;}
}
//Below variables used for Companion banner delivery
var f_cb_medrect1_served=false;
var f_cb_leaderboard1_served=false;
var f_cb_wideskyscraper1_served=false;
var f_cb_31rect_served=false;
var f_cb_fullbanner1_served=false;
var f_cb_medrect1_real=false;
var f_cb_leaderboard1_real=false;
var f_cb_wideskyscraper1_real=false;
var f_cb_31rect_real=false;
var f_cb_fullbanner1_real=false;
var f_need_cb=false;
//Used for backfill the companion banners.
function yume_backfill_banner(banner_div_id,banner_frame_id,imu_type) {
	var rc=0;
	var cbw=document.getElementById(banner_div_id).style.width;
	var cbh =document.getElementById(banner_div_id).style.height;
	var y_c_frame=document.getElementById(banner_frame_id);
	var cb_w=cbw.split("px", 1);
	var cb_h=cbh.split("px", 1);
	_cb.setBannerUrl(cb_w,cb_h,imu_type);
	if(_cb.getBannerUrl() != "null") {
	var arg1=_cb.getBannerUrl();
	try {
	y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML="<iframe src=\""+arg1+"\"height='"+cbh+"'width='"+cbw+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' topmargin='0' leftmargin='0' style='overflow:hidden'></iframe>";
	rc=1;
	} catch(e) {}
	}
	return rc;
}
//Used for serving the companion banner using Iframe
function yume_serve_cb_frame(banner_div_id, banner_frame_id, frame_src_url,cbw,cbh) {
	var rc=0;
	var cbw=document.getElementById(banner_div_id).style.width;
	var cbh =document.getElementById(banner_div_id).style.height;
	var y_c_frame=document.getElementById(banner_frame_id);
	try {
		y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML="<iframe src=\""+frame_src_url+"\"height='"+cbh+"'width='"+cbw+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' topmargin='0' leftmargin='0' style='overflow:hidden'></iframe>";
		rc=1;
	} catch(e) {
		y_c_frame.src = frame_src_url;
		rc = 1;                
	//alert("Error in iframe of companion banner "+e);
	}
	return rc;
}
//Used for serving the companion banner using Image
function yume_serve_cb_image(banner_div_id, banner_frame_id, frame_img, frame_link, frame_trackers,cbw,cbh) {
	var rc=0;
	var y_c_frame=document.getElementById(banner_frame_id);
	var cbw=document.getElementById(banner_div_id).style.width;
	var cbh =document.getElementById(banner_div_id).style.height;
	try {
		var htmlString="";
		if (frame_link != 'null') {
			htmlString="<a href='"+frame_link+"' target='_blank'><img src=\""+frame_img+"\" border='0' width='"+cbw+"' height='"+cbh+"'></a>";
		} else {
			htmlString ="<img src=\""+frame_img+"\" border='0' width='"+cbw+"' height='"+cbh+"'>";
		}
		y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML=htmlString;
		rc=1;
		for (i=0; i<frame_trackers.length; i++) {
			htmlString += "<img width='1' height='1' src=\""+frame_trackers[i]+"\" style='position:absolute;'></img>";
		}
		y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML=htmlString;
	} catch (e) {
	}
	// Added the code for companion banner serve through HTML container //
	if (rc == 1 ) {
		if (banner_div_id == "cb_medrect1_div") {
			f_cb_medrect1_served=true;
			f_cb_medrect1_real=true;
		} else if (banner_div_id == "cb_leaderboard1_div") {
			f_cb_leaderboard1_served=true;
			f_cb_leaderboard1_real=true;
		} else if (banner_div_id == "cb_wideskyscraper1_div") {
			f_cb_wideskyscraper1_served=true;
			f_cb_wideskyscraper1_real=true;
		} else if (banner_div_id == "cb_31rect_div") {
			f_cb_31rect_served=true;
			f_cb_31rect_real=true;
		} else if (banner_div_id == "cb_fullban1_div") {
			f_cb_fullbanner1_served=true;
			f_cb_fullbanner1_real=true;
		}
	}
	return rc;
}
//Used for serving the companion banner using SWF
function yume_serve_cb_swf(banner_div_id, banner_frame_id, frame_img, frame_link, frame_trackers,cbw,cbh) {
	var rc=0;
	var cbw=document.getElementById(banner_div_id).style.width;
	var cbh =document.getElementById(banner_div_id).style.height;
	var y_c_frame=document.getElementById(banner_frame_id);
	try {
		var htmlString="";
		if (frame_img.indexOf(".swf?", 0) > 0) {
			htmlString="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+cbw+"' height='"+cbh+"'> <param name='bgcolor' value='#E3F0EB' />  <param name='movie' value='"+frame_img+"'><param name='allowScriptAccess' value='always'> <param name='wmode' value='transparent'> <param name='quality' value='high'><embed src=\""+frame_img+"\" bgcolor='#E3F0EB' quality='high' wmode='transparent' allowScriptAccess='always' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+cbw+"' height='"+cbh+"'></embed></object>";
		} else {
			htmlString="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+cbw+"' height='"+cbh+"'> <param name='bgcolor' value='#E3F0EB' />  <param name='movie' value='"+frame_img+"?clickTAG="+escape(frame_link)+"'><param name='allowScriptAccess' value='always'> <param name='wmode' value='transparent'> <param name='quality' value='high'><embed src=\""+frame_img+"?clickTAG="+escape(frame_link)+"\" bgcolor='#E3F0EB' quality='high' wmode='transparent' allowScriptAccess='always' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+cbw+"' height='"+cbh+"'></embed></object>";
		}
		for (i=0; i<frame_trackers.length; i++) {
			htmlString += "<img width='1' height='1' src=\""+frame_trackers[i]+"\" style='position:absolute;'></img>";
		}
		y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML=htmlString;
		rc=1;
	} catch (e) {
	}
	return rc;
}
function yume_serve_cb_js(banner_div_id, banner_frame_id, js_url,click_url) {
	var rc=0;
	var cb_width=document.getElementById(banner_div_id).style.width;
	var cb_height=document.getElementById(banner_div_id).style.height;
	var y_c_frame=document.getElementById(banner_frame_id);
	try {
		y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML="<iframe src='serve_js.html?js_url="+escape(js_url)+"'height='"+cb_height+"'width='"+cb_width+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' topmargin='0' leftmargin='0' style='overflow:hidden'></iframe>";
		rc=1;
	} catch (e) {/*alert("Error in iframe of companion banner "+e);*/
	}
	return rc;
}
function yume_serve_cb_html(banner_div_id, banner_frame_id, html_url) {
	var rc=0;
	var cb_width=document.getElementById(banner_div_id).style.width;
	var cb_height=document.getElementById(banner_div_id).style.height;
	var y_c_frame=document.getElementById(banner_frame_id);
	try {
		y_c_frame.contentWindow.document.getElementsByTagName("body")[0].innerHTML=html_url;
		rc=1;
	} catch (e) {/*alert("Error in iframe of companion banner "+e);*/
	}
	return rc;
}
// return 1 if img_url is a SWF, 0 otherwise
function yume_img_is_swf(img_url) {
	var ix_getElement=img_url.indexOf("/getElement?", 0);
	var ix_extSWF=img_url.indexOf("ext=.swf", 0);
	var rc=0;
	if (ix_getElement > 0 && ix_extSWF > ix_getElement) {
		rc=1;
	}
	return rc;
}
//Serve companion banner image through HTML container 
function delegate(that,thatMethod) {
	if(arguments.length > 2) {
	var _params=[];
	for(var n=2; n < arguments.length; ++n) _params.push(arguments[n]);
	return function() { try {
	return thatMethod.apply(that,_params); 
	} catch(e){
	}}
	} else
	return function() { try {
	return thatMethod.apply(that); 
	} catch(e){
	}}
}
//Used for loading the combanion banners through HTML pages
function obj() {
}
obj.prototype.serveImage=function (ref, banner_div_id, banner_frame_id, frame_img, frame_link, frame_trackers,cbw,cbh) {
this.pic=new Image();//x,y is optional
this.pic.src= frame_img;
try {
if (window.addEventListener) { 
this.pic.addEventListener('onload',delegate(ref,yume_serve_cb_image(banner_div_id, banner_frame_id, frame_img, frame_link, frame_trackers,cbw,cbh)));
} else if (window.attachEvent) {
this.pic.attachEvent('onload',delegate(ref,yume_serve_cb_image(banner_div_id, banner_frame_id, frame_img, frame_link, frame_trackers,cbw,cbh)));
}
} catch (e) {}
};
// 		This method used for requesting the combanion banners and backfills in page
function yume_flash_callback(command, arg1, arg2, arg3, arg4, arg5){

/* commenting this out per David Lea until they research this problem
 * there is no such function or function stub and it has started to cause problems
 *
	try{
	yume_flash_callback_js_roll_ad(command, arg1, arg2, arg3, arg4, arg5);
	}catch(e){}
 *
 */

	//alert("yume_flash_callback: start " + command +"," + arg1 + "," + arg2 + "," + arg3);
	if (command == 'companionbanner/iframe'
	  || (command == 'companionbanner/image' && yume_img_is_swf(arg1) > 0) // serve SWFs as an Iframe
           ) 
	{
		//alert("yume_flash_callback: 1 " + command +"," + arg1 + "," + arg2 + "," + arg3);
		if (arg3=="cb1" || arg3=="cb_medrect1") {
			if(_cb.getPlayerMediumRectangleCompanionBannerDivSource() != "null"){
				if(yume_serve_cb_frame("cb_medrect1_div", "cb_medrect1_frame", arg1,300,250) > 0) {
					f_cb_medrect1_served = true;
					f_cb_medrect1_real = true;
				}
			}
		} else
		if (arg3=="cb_leaderboard1") {
				if(_cb.getPlayerLeaderBoardCompanionBannerDivSource() != "null"){
					if (yume_serve_cb_frame("cb_leaderboard1_div", "cb_leaderboard1_frame", arg1,728,90) > 0) {
						f_cb_leaderboard1_served = true;
						f_cb_leaderboard1_real = true;
					}
				}
		} else
		if (arg3=="cb_widesky1"){
			if(_cb.getPlayerWideSkyCompanionBannerDivSource() != "null"){
					if (yume_serve_cb_frame("cb_wideskyscraper1_div", "cb_wideskyscraper1_frame", arg1,160,600) > 0) {
						f_cb_wideskyscraper1_served = true;
						f_cb_wideskyscraper1_real = true;
					}
			}
		} else 
		if (arg3=="cb1" || arg3=="cb_31rect1") {
			if(_cb.getPlayerInPlayerCompanionBannerInPageDivSource() != "null"){
				if (yume_serve_cb_frame("cb_31rect_div","cb_31rect_frame", arg1,300,100) > 0) {
					f_cb_31rect_served = true;
					f_cb_31rect_real = true;
				}
			}
		}else
		if (arg3=="cb_fullban1"){
			if(_cb.getPlayerFBCompanionBannerDivSource() != "null"){
					if (yume_serve_cb_frame("cb_fullban1_div","cb_fullban1_frame", arg1,468,60) > 0) {
						f_cb_fullbanner1_served = true;
						f_cb_fullbanner1_real = true;
					}
			}
		} 
	} else if (command == 'companionbanner/image') { 
		//alert("yume_flash_callback: 2" + command +"," + arg1 + "," + arg2 + "," + arg3);
		if (arg3=="cb1" || arg3=="cb_medrect1") {
			if (arg5 == "application/x-shockwave-flash"){
					if(_cb.getPlayerMediumRectangleCompanionBannerDivSource() != "null"){
						if(yume_serve_cb_swf("cb_medrect1_div", "cb_medrect1_frame", arg1, arg2, arg4,300,250) > 0) {
							f_cb_medrect1_served=true;
							f_cb_medrect1_real=true;
						}
					}
				}else{
					yume_serve_cb_image("cb_medrect1_div", "cb_medrect1_frame", arg1, arg2, arg4, 300, 250);
				}
		} else if(arg3=="cb1" || arg3=="cb_31rect1") {
			if (arg5 == "application/x-shockwave-flash"){
					if(_cb.getPlayerInPlayerCompanionBannerInPageDivSource() != "null"){
						if(yume_serve_cb_swf("cb_31rect_div","cb_31rect_frame", arg1, arg2, arg4,300,100) > 0) {
							f_cb_31rect_served=true;
							f_cb_31rect_real=true;
						}
					}
				}else{
					yume_serve_cb_image("cb_31rect_div","cb_31rect_frame", arg1, arg2, arg4,300,100);
				}
		} else if (arg3=="cb_leaderboard1") {
			if (arg5 == "application/x-shockwave-flash"){
					if(_cb.getPlayerLeaderBoardCompanionBannerDivSource() != "null"){
					if(yume_serve_cb_swf("cb_leaderboard1_div", "cb_leaderboard1_frame", arg1, arg2, arg4,728,90) > 0) {
						f_cb_leaderboard1_served=true;
						f_cb_leaderboard1_real=true;
					}
					}
				}else{
					yume_serve_cb_image("cb_leaderboard1_div", "cb_leaderboard1_frame", arg1, arg2, arg4,728,90);
				}
		} else if(arg3=="cb_widesky1") {
			if(arg5 == "application/x-shockwave-flash"){
					if(_cb.getPlayerWideSkyCompanionBannerDivSource() != "null"){
						if(yume_serve_cb_swf("cb_wideskyscraper1_div", "cb_wideskyscraper1_frame", arg1, arg2, arg4,160,600) > 0) {
							f_cb_wideskyscraper1_served=true;
							f_cb_wideskyscraper1_real=true;
						}
					}
				}else{
					yume_serve_cb_image("cb_wideskyscraper1_div", "cb_wideskyscraper1_frame", arg1, arg2, arg4,160,600);
				}
		} else if(arg3=="cb_fullban1") {
			if (arg5 == "application/x-shockwave-flash"){
					if(_cb.getPlayerFBCompanionBannerDivSource() != "null"){
						if (yume_serve_cb_swf("cb_fullban1_div","cb_fullban1_frame", arg1, arg2, arg4,468,60) > 0) {
							f_cb_fullbanner1_served=true;
							f_cb_fullbanner1_real=true;
						}
					}
				} else {
					yume_serve_cb_image("cb_fullban1_div","cb_fullban1_frame", arg1, arg2, arg4,468,60);
				}
		}
	} else if(command == 'companionbanner/js'){
		//alert("yume_flash_callback: 3 " + command +"," + arg1 + "," + arg2 + "," + arg3);
		if (arg3=="cb1" || arg3=="cb_medrect1") {
			if(_cb.getPlayerMediumRectangleCompanionBannerDivSource() != "null"){
			if (yume_serve_cb_js("cb_medrect1_div", "cb_medrect1_frame", arg1) > 0) {
				f_cb_medrect1_served=true;
				f_cb_medrect1_real=true;
			}
			}
		} else
		if (arg3=="cb_leaderboard1") {
			if(_cb.getPlayerLeaderBoardCompanionBannerDivSource() != "null"){
			if (yume_serve_cb_js("cb_leaderboard1_div", "cb_leaderboard1_frame", arg1) > 0) {
				f_cb_leaderboard1_served=true;
				f_cb_leaderboard1_real=true;
			}
			}
		} else
		if (arg3=="cb_widesky1"){
			if(_cb.getPlayerWideSkyCompanionBannerDivSource() != "null"){
			if (yume_serve_cb_js("cb_wideskyscraper1_div", "cb_wideskyscraper1_frame", arg1) > 0) {
				f_cb_wideskyscraper1_served=true;
				f_cb_wideskyscraper1_real=true;
			}
			}
		} else 
		if (arg3=="cb1" || arg3=="cb_31rect1") {
			if(_cb.getPlayerInPlayerCompanionBannerInPageDivSource() != "null"){
			if (yume_serve_cb_js("cb_31rect_div","cb_31rect_frame", arg1) > 0) {
				f_cb_31rect_served=true;
				f_cb_31rect_real=true;
			}
			}
		}else 
		if (arg3=="cb_fullban1") {
			if(_cb.getPlayerFBCompanionBannerDivSource() != "null"){
				if (yume_serve_cb_js("cb_fullban1_div", "cb_fullban1_frame", arg1) > 0) {
					f_cb_fullbanner1_served  = true;
					f_cb_fullbanner1_real = true;
				}
			}
		}
	
	}else if(command == 'companionbanner/html'){
		//alert("yume_flash_callback: 4 " + command +"," + arg1 + "," + arg2 + "," + arg3);
		if (arg3=="cb1" || arg3=="cb_medrect1") {
			if(_cb.getPlayerMediumRectangleCompanionBannerDivSource() != "null"){
			if (yume_serve_cb_html("cb_medrect1_div", "cb_medrect1_frame", arg1) > 0) {
				f_cb_medrect1_served=true;
				f_cb_medrect1_real=true;
			}
			}
		} else
		if (arg3=="cb_leaderboard1") {
			if(_cb.getPlayerLeaderBoardCompanionBannerDivSource() != "null"){
			if (yume_serve_cb_html("cb_leaderboard1_div", "cb_leaderboard1_frame", arg1) > 0) {
				f_cb_leaderboard1_served=true;
				f_cb_leaderboard1_real=true;
			}
			}
		} else
		if (arg3=="cb_widesky1"){
			if(_cb.getPlayerWideSkyCompanionBannerDivSource() != "null"){
			if (yume_serve_cb_html("cb_wideskyscraper1_div", "cb_wideskyscraper1_frame", arg1) > 0) {
				f_cb_wideskyscraper1_served=true;
				f_cb_wideskyscraper1_real=true;
			}
			}
		} else 
		if (arg3=="cb1" || arg3=="cb_31rect1") {
			if(_cb.getPlayerInPlayerCompanionBannerInPageDivSource() != "null"){
			if (yume_serve_cb_html("cb_31rect_div","cb_31rect_frame", arg1) > 0) {
				f_cb_31rect_served=true;
				f_cb_31rect_real=true;
			}
			}
		}else 
		if (arg3=="cb_fullban1") {
			if(_cb.getPlayerFBCompanionBannerDivSource() != "null"){
				if (yume_serve_cb_html("cb_fullban1_div", "cb_fullban1_frame", arg1) > 0) {
					f_cb_fullbanner1_served  = true;
					f_cb_fullbanner1_real = true;
				}
			}
		}
	
	}else if(command == "yume_leader_start" || command == "yume_preroll_start" || command == "yume_postroll_start" || command == "yume_midroll_start") {
			f_need_cb = true;
			//alert("yume_flash_callback: 4 " + command +"," + arg1 + "," + arg2);
		if(command == "yume_leader_start"){
			f_cb_medrect1_served = false;
			f_cb_medrect1_real = false;
			f_cb_leaderboard1_served = false;
			f_cb_leaderboard1_real = false;
			f_cb_wideskyscraper1_served = false;
			f_cb_wideskyscraper1_real = false;
			f_cb_31rect_real = false;
			f_cb_31rect_served = false;
			f_cb_fullbanner1_served  = false;
			f_cb_fullbanner1_real  = false;
		}
        } else if(command == "yume_leader_end" || command == "yume_preroll_end" || command == "yume_postroll_end" || command == "yume_midroll_end") {
				f_need_cb = false;
        } else 	if(command == "yume_ad_end") {
			  f_cb_medrect1_served = false;
			  f_cb_leaderboard1_served = false;
			  f_cb_wideskyscraper1_served = false;
			  f_cb_31rect_served = false;
			  f_cb_fullbanner1_served = false;
        } else
	if( (command == "yume_ad_start" && f_need_cb == true)
	  ||(command == "yume_end" && arg1 == "0" && f_need_cb == true) ) {
				// Backfill request of medium rectangle Companion banner
				if ((f_cb_medrect1_served == false)&&(f_cb_medrect1_real == false)) {
					if(_cb.getPlayerMediumRectangleCompanionBannerDivSource() != "null"){if(yume_backfill_banner("cb_medrect1_div", "cb_medrect1_frame", "medrect") > 0){f_cb_medrect1_served = true;}}
				} // end if
				// Backfill request of leaderboard Companion banner
				if ((f_cb_leaderboard1_served == false)&&(f_cb_leaderboard1_real == false)) {
					if(_cb.getPlayerLeaderBoardCompanionBannerDivSource()!="null"){if (yume_backfill_banner("cb_leaderboard1_div", "cb_leaderboard1_frame","leaderboard")>0){f_cb_leaderboard1_served=true;}}
				} // end if
				// Backfill request of widesky Companion banner
				if((f_cb_wideskyscraper1_served == false)&&(f_cb_wideskyscraper1_real == false)){
					if(_cb.getPlayerWideSkyCompanionBannerDivSource()!="null"){if (yume_backfill_banner("cb_wideskyscraper1_div", "cb_wideskyscraper1_frame","widesky")>0){f_cb_wideskyscraper1_served=true;}}
				} // end if
				// Backfill request of Inpage 300x100 Companion banner
				if ((f_cb_31rect_served == false)&&(f_cb_31rect_real == false)) {
					if(_cb.getPlayerInPlayerCompanionBannerInPageDivSource()!="null"){if (yume_backfill_banner("cb_31rect_div","cb_31rect_frame","31rect")>0){f_cb_31rect_served=true;}}
				} // end if
				// Backfill request of fullbanner Companion banner
				if((f_cb_fullbanner1_served  == false)&&(f_cb_fullbanner1_real  == false)){
					if(_cb.getPlayerFBCompanionBannerDivSource()!="null"){if (yume_backfill_banner("cb_fullban1_div", "cb_fullban1_frame","fullban")>0){f_cb_fullbanner1_served=true;}}
				} // end if
        }
}


	var n_random=Math.floor(Math.random()*100001);var rand_str = "&rand="+n_random;
	var connection_no = Math.floor(Math.random()*100000001);
	
	function yume_connection_no(){return connection_no;}
	
	function yumeAdPlayer(thePublisherAdServer, thePublishersAdDomain){
	 	var yumeCbAdObject1 = new yumeStaticCbAd();
	 	var yumeMedRectDivId = 'cb_medrect1_div';
	 	var yumeMedRectFrameId = 'cb_medrect1_frame';
		yumeCbAdObject1.setPlayerMediumRectangleCompanionBannerDivSource(yumeMedRectDivId );
		yumeCbAdObject1.setPlayerAdDomainUrl(thePublisherAdServer);
	    yumeCbAdObject1.setPlayerIframeBannerPlaylist("/dynamic_banner_iframe.html?domain=" + thePublishersAdDomain);
	}


/*!
 * jQuery Form Plugin
 * version: 2.45 (09-AUG-2010)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function() {
			$(this).ajaxSubmit({
				target: '#output'
			});
			return false; // <-- important!
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	if (typeof options == 'function') {
		options = { success: options };
	}

	var url = $.trim(this.attr('action'));
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}
	url = url || window.location.href || '';

	options = $.extend(true, {
		url:  url,
		type: this.attr('method') || 'GET',
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

	var n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
		for (n in options.data) {
			if(options.data[n] instanceof Array) {
				for (var k in options.data[n]) {
					a.push( { name: n, value: options.data[n][k] } );
				}
			}
			else {
				v = options.data[n];
				v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
				a.push( { name: n, value: v } );
			}
		}
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a);

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var $form = this, callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context 
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, fileUpload);
		}
	   else {
		   fileUpload();
		}
   }
   else {
	   $.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload() {
		var form = $form[0];

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}

		var s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		var id = 'jqFormIO' + (new Date().getTime());
		var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" onload="var f = jQuery(this).data(\'form-plugin-onload\'); if (f) f();" />');
		var io = $io[0];

		$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

		var xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function() {
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
			}
		};

		var g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) { 
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		var cbInvoked = false;
		var timedOut = 0;

		// add submitting element to data if we know it
		var sub = form.clk;
		if (sub) {
			var n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST') {
				form.setAttribute('method', 'POST');
			}
			if (form.getAttribute('action') != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				setTimeout(function() { timedOut = true; cb(); }, s.timeout);
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
								.appendTo(form)[0]);
					}
				}

				// add iframe to doc and submit the form
				$io.appendTo('body');
				$io.data('form-plugin-onload', cb);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}
	
		var data, doc, domCheckCount = 100;

		function cb() {
			if (cbInvoked) {
				return;
			}

			$io.removeData('form-plugin-onload');
			
			var ok = true;
			try {
				if (timedOut) {
					throw 'timeout';
				}
				// extract the server response from the iframe
				doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
				
				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					log('Could not access iframe DOM after 100 tries.');
					throw 'DOMException: not available';
				}

				log('response detected');
				cbInvoked = true;
				xhr.responseText = doc.documentElement ? doc.documentElement.innerHTML : null; 
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};

				var scr = /(json|script)/.test(s.dataType);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						if (pre) {
							xhr.responseText = pre.innerHTML;
						}
					}			  
				}
				else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}
				data = $.httpData(xhr, s.dataType);
			}
			catch(e){
				log('error caught:',e);
				ok = false;
				xhr.error = e;
				$.handleError(s, xhr, 'error', e);
			}

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (ok) {
				s.success.call(s.context, data, 'success');
				if (g) {
					$.event.trigger("ajaxSuccess", [xhr, s]);
				}
			}
			if (g) {
				$.event.trigger("ajaxComplete", [xhr, s]);
			}
			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}
			if (s.complete) {
				s.complete.call(s.context, xhr, ok ? 'success' : 'error');
			}

			// clean up
			setTimeout(function() {
				$io.removeData('form-plugin-onload');
				$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		function toXml(s, doc) {
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
		}
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}
	
	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}
	
	var i,j,n,v,el;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
	return this.each(function() {
		$('input,select,textarea', this).clearFields();
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (t == 'text' || t == 'password' || tag == 'textarea') {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
	if ($.fn.ajaxSubmit.debug) {
		var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
		if (window.console && window.console.log) {
			window.console.log(msg);
		}
		else if (window.opera && window.opera.postError) {
			window.opera.postError(msg);
		}
	}
};

})(jQuery);


/**
 *
 * Color picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var ColorPicker = function () {
		var
			ids = {},
			inAction,
			charMin = 65,
			visible,
			tpl = '<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',
			defaults = {
				eventName: 'click',
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				color: 'ff0000',
				livePreview: true,
				flat: false
			},
			fillRGBFields = function  (hsb, cal) {
				var rgb = HSBToRGB(hsb);
				$(cal).data('colorpicker').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(4).val(hsb.h).end()
					.eq(5).val(hsb.s).end()
					.eq(6).val(hsb.b).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colorpicker').fields
					.eq(0).val(HSBToHex(hsb)).end();
			},
			setSelector = function (hsb, cal) {
				$(cal).data('colorpicker').selector.css('backgroundColor', '#' + HSBToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colorpicker').selectorIndic.css({
					left: parseInt(150 * hsb.s/100, 10),
					top: parseInt(150 * (100-hsb.b)/100, 10)
				});
			},
			setHue = function (hsb, cal) {
				$(cal).data('colorpicker').hue.css('top', parseInt(150 - 150 * hsb.h/360, 10));
			},
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colorpicker').currentColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colorpicker').newColor.css('backgroundColor', '#' + HSBToHex(hsb));
			},
			keyDown = function (ev) {
				var pressedKey = ev.charCode || ev.keyCode || -1;
				if ((pressedKey > charMin && pressedKey <= 90) || pressedKey == 32) {
					return false;
				}
				var cal = $(this).parent().parent();
				if (cal.data('colorpicker').livePreview === true) {
					change.apply(this);
				}
			},
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colorpicker').color = col = HexToHSB(fixHex(this.value));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colorpicker').color = col = fixHSB({
						h: parseInt(cal.data('colorpicker').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colorpicker').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(6).val(), 10)
					});
				} else {
					cal.data('colorpicker').color = col = RGBToHSB(fixRGB({
						r: parseInt(cal.data('colorpicker').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colorpicker').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colorpicker').fields.eq(3).val(), 10)
					}));
				}
				if (ev) {
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colorpicker').onChange.apply(cal, [col, HSBToHex(col), HSBToRGB(col)]);
			},
			blur = function (ev) {
				var cal = $(this).parent().parent();
				cal.data('colorpicker').fields.parent().removeClass('colorpicker_focus');
			},
			focus = function () {
				charMin = this.parentNode.className.indexOf('_hex') > 0 ? 70 : 65;
				$(this).parent().parent().data('colorpicker').fields.parent().removeClass('colorpicker_focus');
				$(this).parent().addClass('colorpicker_focus');
			},
			downIncrement = function (ev) {
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colorpicker_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colorpicker').livePreview					
				};
				$(document).bind('mouseup', current, upIncrement);
				$(document).bind('mousemove', current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val + ev.pageY - ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colorpicker_slider').find('input').focus();
				$(document).unbind('mouseup', upIncrement);
				$(document).unbind('mousemove', moveIncrement);
				return false;
			},
			downHue = function (ev) {
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upHue);
				$(document).bind('mousemove', current, moveHue);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(4)
						.val(parseInt(360*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.y))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upHue);
				$(document).unbind('mousemove', moveHue);
				return false;
			},
			downSelector = function (ev) {
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colorpicker').livePreview;
				$(document).bind('mouseup', current, upSelector);
				$(document).bind('mousemove', current, moveSelector);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colorpicker')
						.fields
						.eq(6)
						.val(parseInt(100*(150 - Math.max(0,Math.min(150,(ev.pageY - ev.data.pos.top))))/150, 10))
						.end()
						.eq(5)
						.val(parseInt(100*(Math.max(0,Math.min(150,(ev.pageX - ev.data.pos.left))))/150, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colorpicker').color, ev.data.cal.get(0));
				$(document).unbind('mouseup', upSelector);
				$(document).unbind('mousemove', moveSelector);
				return false;
			},
			enterSubmit = function (ev) {
				$(this).addClass('colorpicker_focus');
			},
			leaveSubmit = function (ev) {
				$(this).removeClass('colorpicker_focus');
			},
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').color;
				cal.data('colorpicker').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colorpicker').onSubmit(col, HSBToHex(col), HSBToRGB(col), cal.data('colorpicker').el);
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('colorpickerId'));
				cal.data('colorpicker').onBeforeShow.apply(this, [cal.get(0)]);
				var pos = $(this).offset();
				var viewPort = getViewport();
				var top = pos.top + this.offsetHeight;
				var left = pos.left;
				if (top + 176 > viewPort.t + viewPort.h) {
					top -= this.offsetHeight + 176;
				}
				if (left + 356 > viewPort.l + viewPort.w) {
					left -= 356;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colorpicker').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				$(document).bind('mousedown', {cal: cal}, hide);
				return false;
			},
			hide = function (ev) {
				if (!isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('colorpicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			}, 
			HexToRGB = function (hex) {
				var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
			},
			HexToHSB = function (hex) {
				return RGBToHSB(HexToRGB(hex));
			},
			RGBToHSB = function (rgb) {
				var hsb = {
					h: 0,
					s: 0,
					b: 0
				};
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				if (max != 0) {
					
				}
				hsb.s = max != 0 ? 255 * delta / max : 0;
				if (hsb.s != 0) {
					if (rgb.r == max) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if (rgb.g == max) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if (hsb.h < 0) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			},
			HSBToRGB = function (hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s == 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255-s)*v/255;
					var t3 = (t1-t2)*(h%60)/60;
					if(h==360) h = 0;
					if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
					else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
					else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
					else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
					else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
					else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
					else {rgb.r=0; rgb.g=0;	rgb.b=0}
				}
				return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
			},
			RGBToHex = function (rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function (nr, val) {
					if (val.length == 1) {
						hex[nr] = '0' + val;
					}
				});
				return hex.join('');
			},
			HSBToHex = function (hsb) {
				return RGBToHex(HSBToRGB(hsb));
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colorpicker').origColor;
				cal.data('colorpicker').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				if (typeof opt.color == 'string') {
					opt.color = HexToHSB(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = RGBToHSB(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				return this.each(function () {
					if (!$(this).data('colorpickerId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colorpickerId', id);
						var cal = $(tpl).attr('id', id);
						if (options.flat) {
							cal.appendTo(this).show();
						} else {
							cal.appendTo(document.body);
						}
						options.fields = cal
											.find('input')
												.bind('keyup', keyDown)
												.bind('change', change)
												.bind('blur', blur)
												.bind('focus', focus);
						cal
							.find('span').bind('mousedown', downIncrement).end()
							.find('>div.colorpicker_current_color').bind('click', restoreOriginal);
						options.selector = cal.find('div.colorpicker_color').bind('mousedown', downSelector);
						options.selectorIndic = options.selector.find('div div');
						options.el = this;
						options.hue = cal.find('div.colorpicker_hue div');
						cal.find('div.colorpicker_hue').bind('mousedown', downHue);
						options.newColor = cal.find('div.colorpicker_new_color');
						options.currentColor = cal.find('div.colorpicker_current_color');
						cal.data('colorpicker', options);
						cal.find('div.colorpicker_submit')
							.bind('mouseenter', enterSubmit)
							.bind('mouseleave', leaveSubmit)
							.bind('click', clickSubmit);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						if (options.flat) {
							cal.css({
								position: 'relative',
								display: 'block'
							});
						} else {
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colorpickerId')) {
						$('#' + $(this).data('colorpickerId')).hide();
					}
				});
			},
			setColor: function(col) {
				if (typeof col == 'string') {
					col = HexToHSB(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = RGBToHSB(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colorpickerId')) {
						var cal = $('#' + $(this).data('colorpickerId'));
						cal.data('colorpicker').color = col;
						cal.data('colorpicker').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						setCurrentColor(col, cal.get(0));
						setNewColor(col, cal.get(0));
					}
				});
			}
		};
	}();
	$.fn.extend({
		ColorPicker: ColorPicker.init,
		ColorPickerHide: ColorPicker.hidePicker,
		ColorPickerShow: ColorPicker.showPicker,
		ColorPickerSetColor: ColorPicker.setColor
	});
})(jQuery)

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();


(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);

/*
 * Metadata - jQuery plugin for parsing metadata from elements
 *
 * Copyright (c) 2006 John Resig, Yehuda Katz, J�örn Zaefferer, Paul McLanahan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.metadata.js 3640 2007-10-11 18:34:38Z pmclanahan $
 *
 */

/**
 * Sets the type of metadata to use. Metadata is encoded in JSON, and each property
 * in the JSON will become a property of the element itself.
 *
 * There are four supported types of metadata storage:
 *
 *   attr:  Inside an attribute. The name parameter indicates *which* attribute.
 *          
 *   class: Inside the class attribute, wrapped in curly braces: { }
 *   
 *   elem:  Inside a child element (e.g. a script tag). The
 *          name parameter indicates *which* element.
 *   html5: Values are stored in data-* attributes.
 *          
 * The metadata for an element is loaded the first time the element is accessed via jQuery.
 *
 * As a result, you can define the metadata type, use $(expr) to load the metadata into the elements
 * matched by expr, then redefine the metadata type and run another $(expr) for other elements.
 * 
 * @name $.metadata.setType
 *
 * @example <p id="one" class="some_class {item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("class")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from the class attribute
 * 
 * @example <p id="one" class="some_class" data="{item_id: 1, item_label: 'Label'}">This is a p</p>
 * @before $.metadata.setType("attr", "data")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a "data" attribute
 * 
 * @example <p id="one" class="some_class"><script>{item_id: 1, item_label: 'Label'}</script>This is a p</p>
 * @before $.metadata.setType("elem", "script")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a nested script element
 * 
 * @example <p id="one" class="some_class" data-item_id="1" data-item_label="Label">This is a p</p>
 * @before $.metadata.setType("html5")
 * @after $("#one").metadata().item_id == 1; $("#one").metadata().item_label == "Label"
 * @desc Reads metadata from a series of data-* attributes
 *
 * @param String type The encoding type
 * @param String name The name of the attribute to be used to get metadata (optional)
 * @cat Plugins/Metadata
 * @descr Sets the type of encoding to be used when loading metadata for the first time
 * @type undefined
 * @see metadata()
 */

(function($) {

$.extend({
  metadata : {
    defaults : {
      type: 'class',
      name: 'metadata',
      cre: /({.*})/,
      single: 'metadata'
    },
    setType: function( type, name ){
      this.defaults.type = type;
      this.defaults.name = name;
    },
    get: function( elem, opts ){
      var settings = $.extend({},this.defaults,opts);
      // check for empty string in single property
      if ( !settings.single.length ) settings.single = 'metadata';
      
      var data = $.data(elem, settings.single);
      // returned cached data if it already exists
      if ( data ) return data;
      
      data = "{}";
      
      var getData = function(data) {
        if(typeof data != "string") return data;
        
        if( data.indexOf('{') < 0 ) {
          data = eval("(" + data + ")");
        }
      }
      
      var getObject = function(data) {
        if(typeof data != "string") return data;
        
        data = eval("(" + data + ")");
        return data;
      }
      
      if ( settings.type == "html5" ) {
        var object = {};
        $( elem.attributes ).each(function() {
          var name = this.nodeName;
          if(name.match(/^data-/)) name = name.replace(/^data-/, '');
          else return true;
          object[name] = getObject(this.nodeValue);
        });
      } else {
        if ( settings.type == "class" ) {
          var m = settings.cre.exec( elem.className );
          if ( m )
            data = m[1];
        } else if ( settings.type == "elem" ) {
          if( !elem.getElementsByTagName ) return;
          var e = elem.getElementsByTagName(settings.name);
          if ( e.length )
            data = $.trim(e[0].innerHTML);
        } else if ( elem.getAttribute != undefined ) {
          var attr = elem.getAttribute( settings.name );
          if ( attr )
            data = attr;
        }
        object = getObject(data.indexOf("{") < 0 ? "{" + data + "}" : data);
      }
      
      $.data( elem, settings.single, object );
      return object;
    }
  }
});

/**
 * Returns the metadata object for the first member of the jQuery object.
 *
 * @name metadata
 * @descr Returns element's metadata object
 * @param Object opts An object contianing settings to override the defaults
 * @type jQuery
 * @cat Plugins/Metadata
 */
$.fn.metadata = function( opts ){
  return $.metadata.get( this[0], opts );
};

})(jQuery);

// Add an auth token to ajax requests

jQuery(document).ajaxSend(function(event, request, settings) {
  if (typeof(AUTH_TOKEN) == "undefined") return;
  // settings.data is a serialized string like "foo=bar&baz=boink" (or null)
  settings.data = settings.data || "";
  settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);
});


// functions for putting players on a page
jQuery.metadata.setType('elem', 'script');

// jQuery.ajaxSetup({  
// 	'beforeSend': function (xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
// });


jQuery(document).ready(function() {
	
	// disable uuid field from being editable
	if($('.lock_from_edit').size()) {
		$('.lock_from_edit').attr("disabled", true); 
	}
	
	
	// functions for the playlist drag and drop
	
	var $gallery = $('#videos'), $playlist = $('#playlist');

	//let the #videos items be draggable
	$('#videos li').draggable({
		cancel: 'a.ui-icon',// clicking an icon won't initiate dragging
		revert: 'invalid', // when not dropped, the item will revert back to its initial position
		containment: $('#demo').length ? '#demo' : 'document', // stick to demo-frame if present
		helper: 'clone',
		cursor: 'move',
	});
	
	
	// let the playlist be droppable, accepting the to_playlist li items
	$playlist.droppable({
		accept: 'li.to-playlist',
		activeClass: 'ui-state-highlight',
		drop: function(ev, ui) {
			addToPlaylist(ui.draggable);				
		}
	}).sortable({
		tolerance:'pointer',
		items: 'li:not(.dynamic_search)',
		update: function(ev, ui) {
			updatePlaylistOrder();
		}
	}).disableSelection();
	
	

	// let the gallery be droppable as well, accepting items from the trash
	$gallery.droppable({
		accept: '#playlist > li.dynamic-search-videos',
		activeClass: 'custom-state-active',
		drop: function(ev, ui) {
			removeFromPlaylist(ui.draggable);
		}
	});
	// 
	
	
	// update order of static playlist
	function updatePlaylistOrder() {
		var order_list = new Array;
		$.each ($('#playlist > li > .guid'), function(index, value) {
			if ($.trim($(this).text()).length > 0) {
				order_list[index] = $.trim($(this).text())
			}
		});
		$('.video_list').val(order_list.join(','))
	};
	
	// image deletion function
	var recycle_icon = '<a href="#" title="Remove from Playlist" class="ui-icon ui-icon-circle-minus">Remove from Playlist</a>';
	function addToPlaylist($item) {
		if ($item.find('a.ui-icon-circle-minus').length == 0) {
			$item.fadeOut(function() {
				$item.draggable( "option", "disabled", true)
				$item.removeClass('ui-state-disabled')
				$item.find('a.ui-icon-circle-plus').remove();
				$item.append(recycle_icon).insertBefore('.dynamic_search').fadeIn(function() {
					$item.animate({ width: '125px' }).find('img').animate({ height: '100px' });
				});
			});
		}
	}
	
	// image recycle function
	var trash_icon = '<a href="#" title="Add to Playlist" class="ui-icon ui-icon-circle-plus">Add to Playlist</a>';
	function removeFromPlaylist($item) {
		$item.fadeOut(function() {
			$item.draggable( "option", "disabled", false)
			$item.find('a.ui-icon-circle-minus').remove();
			if ($item.is('.dynamic-search-videos')) {
				$item.css('width','150px').append(trash_icon).find('img').css('height','125px').end().appendTo('ul#videos').fadeIn();				
			} else if ($item.is('.search_videos')) {
				$item.css('width','150px').append(trash_icon).find('img').css('height','125px').end().appendTo('ul#search_videos').fadeIn();								
			} else {
				$item.remove()
			}
				
		});
	}
	
	// image preview function, demonstrating the ui.dialog used as a modal window
	
	function display_video_in_modal(fields_hash) {
		
		var video = fields_hash['video'];
		var video_html 					= '<tr><td colspan = "2" class = "tc"><div id="video">Video goes here</div></td></tr>'
		var title_html 					= '<tr><td class="titles">Title</td><td class="values">' + video['title'] + '</td></tr>'
		var description_html 		= '<tr><td class="titles">Description</td><td class="values">' + video['description'] + '</td></tr>'
		var tags_html 					= '<tr><td class="titles">Tag List</td><td class="values">' + video['tag_list'] + '</td></tr>'
		var html 								= '<table class="modal_table">' + video_html + title_html + description_html + tags_html + '</table>'
		
		swfobject.removeSWF('video'); 		
			
		var $video_display = $('<div class="flash_player"></div>').append(html)
			.dialog({
				dialogClass: 'view_video playlist_modal_form',
				bgiframe: true,
				autoOpen: false,
				title: "Video Details",
				height: 630,
				width: 800,
				modal: true,
				buttons: {
				   OK: function() { $(this).dialog('close'); }
			   },
				modal: true,
				draggable: false,
				closeOnEscape: false,
				resizable: false
			});
		
		swfobject.embedSWF('/flash/player-licensed.swf','video','640','320','10',false,{'file':video['file_url'], 'image':video['thumbnail_url']}, {"allowNetworking":"all","allowFullScreen":true,"allowscriptaccess":"always","wmode":"transparent","menu":false});
		
		$video_display.dialog('open');
		return false;
				
	};
	
	function viewLargerImage($item) {
		
		var guid = $.trim($item.find('.guid').text());
		var url = '/videodetail';
		
		$.getJSON(url, { 'guid' : guid }, display_video_in_modal);
	}
	
	// resolve the icons behavior with event delegation
	$('ul.video_format > li').click(function(ev) {
		var $item = $(this);
		var $target = $(ev.target);
	
		if ($target.is('a.ui-icon-circle-plus')) {
			addToPlaylist($item);
		} else if ($target.is('a.ui-icon-zoomin')) {
			viewLargerImage($item);
		} else if ($target.is('a.ui-icon-circle-minus')) {
			removeFromPlaylist($item);
		} else if ($target.is('a.ui-icon-trash')) {
			removeFromPlaylist($item);
		}
	
		return false;
	});
	
	
	// search video library via ajax
	$('#video_search_form').ajaxForm(function(response) {
		// $('#video_search_form').clearForm();
		$('#ajax_ref').html("")
		$('#ajax_ref').append(response);
		
		
		$('#search_videos li').draggable({
			cancel: 'a.ui-icon',// clicking an icon won't initiate dragging
			revert: 'invalid', // when not dropped, the item will revert back to its initial position
			containment: $('#demo').length ? '#demo' : 'document', // stick to demo-frame if present
			helper: 'clone',
			cursor: 'move',
		});

		// let the search videos be droppable as well, accepting items from the playlist
		$('#search_videos').droppable({
			accept: '#playlist > li.search_videos',
			activeClass: 'custom-state-active',
			drop: function(ev, ui) {
				removeFromPlaylist(ui.draggable);
			}
		});
		// 		
		$('#ajax_ref > li').click(function(ev) {
			var $item = $(this);
			var $target = $(ev.target);

			if ($target.is('a.ui-icon-circle-plus')) {
				addToPlaylist($item);
			} else if ($target.is('a.ui-icon-zoomin')) {
				viewLargerImage($item);
			} else if ($target.is('a.ui-icon-circle-minus')) {
				removeFromPlaylist($item);
			} else if ($target.is('a.ui-icon-trash')) {
				removeFromPlaylist($item);
			}
		});


		return false;
	});
		
	// 	Used for uploading videos to tell when the form should be closed
	if ($('#done').size()) {
		$('#done').click(function () {
			$('#done_hidden_flag').val(1)
		});
	};	
	
	
	// Submit via Done (Playlists)
	$('#done-button').click(function() {
		updatePlaylistOrder();
	});
	
	// for plylist dynamic form values to be saved when the playlist is saved.
	function updateHiddenFields() {
		$('.search_context').val($('.dynamic_form_search_context').val())
		$('.index_enum').val($('.dynamic_form_index_enum').val())
		$('.search_order_enum').val($('.dynamic_form_search_order_enum').val())
		$('.result_set').val($('.dynamic_form_result_set').val())
		var checked  = $("#search_form :checkbox:checked")
		var result = new Array()
		for (var i =0; i < checked.length; i++) {
			result.push($.trim(checked[i].value))
		};
		$('.provider_enums').val(result)
	}
	
	function addListernerForDraging() {
		$('#videos li').draggable({
			cancel: 'a.ui-icon',// clicking an icon won't initiate dragging
			revert: 'invalid', // when not dropped, the item will revert back to its initial position
			containment: $('#demo').length ? '#demo' : 'document', // stick to demo-frame if present
			helper: 'clone',
			cursor: 'move',
		});

		// let the search videos be droppable as well, accepting items from the playlist
		$('#videos').droppable({
			accept: '#playlist > li.dynamic-search-videos',
			activeClass: 'custom-state-active',
			drop: function(ev, ui) {
				removeFromPlaylist(ui.draggable);
			}
		});
		// 		
		$('#videos > li').click(function(ev) {
			var $item = $(this);
			var $target = $(ev.target);

			if ($target.is('a.ui-icon-circle-plus')) {
				addToPlaylist($item);
			} else if ($target.is('a.ui-icon-zoomin')) {
				viewLargerImage($item);
			} else if ($target.is('a.ui-icon-circle-minus')) {
				removeFromPlaylist($item);
			} else if ($target.is('a.ui-icon-trash')) {
				removeFromPlaylist($item);
			}
		});
		
	}
	
	
		
	
	var amodal = $("#modal-form").dialog({
		dialogClass: 'playlist_modal_form',
		bgiframe: true,
		autoOpen: false,
		height: 725,
		width: 800,
		modal: true,
		buttons: {
			Delete:  function() { 
				$('.search_context').val("");
				$('.provider_enums').val("");
				$("#search_form").clearForm();
				$('#dynamic_search_results').html("")
			 	$(this).dialog('close'); 				
			},
		  Cancel: function() { $(this).dialog('close'); },
		  Search: function() { 
				updatePlaylistOrder();
				updateHiddenFields();
				var queryString = $('#search_form').formSerialize();
				var url = '/dynamicvideosearch';

				$.post(url, queryString, function(response) { 
					$('#dynamic_search_results').html("")
					$('#dynamic_search_results').append(response);
					addListernerForDraging()
					return false;
				}); 
				$(this).dialog('close');
				return false;
			}
	 	}
	});
		
	$('#load-my-modal').click(function() {
	    $('#modal-form').dialog('open');
	});
	
	if ($('#checkbox_data').size()) {
		var check_boxes = $(':checkbox');
		
		for (var i =0; i < check_boxes.length; i++) {
			if ($.inArray(check_boxes[i].id.split('_')[check_boxes[i].id.split('_').length -1], $('#checkbox_data').metadata()['1']) != -1) {
			  check_boxes[i].checked = true;
			};
		};
	};
	
	 // get player values from html script application/json tags
	
	if ($('#rg_player_required').size()) {
		$.data(document.body, 'player_required', $('#rg_player_required').metadata());
		$.data(document.body, 'player_params', $('#rg_player_params').metadata());
		$.data(document.body, 'player_flashvars', $('#rg_player_flashvars').metadata());
		$.data(document.body, 'player_attributes', $('#rg_player_attributes').metadata());
		if ($('#rg_playlist_uuids').size()) {
		 $.data(document.body, 'playlist_uuids', $('#rg_playlist_uuids').metadata());
	};
	};	
	// 
	// reload player when player_required fields change
	
	$.update_player = function() {
		
		var p_required 			= $.data(document.body, 'player_required');
		var p_params   			= $.data(document.body, 'player_params');
		var p_flashvars 		= $.data(document.body, 'player_flashvars');
		var p_attributes		= $.data(document.body, 'player_attributes');
		var height 					= parseInt($.data(document.body, 'player_required')['height'])
		var width  					= parseInt($.data(document.body, 'player_required')['width'])
		var playlist 				= $.data(document.body, 'player_flashvars')['playlist']
		var playlist_size		= parseInt($.data(document.body, 'player_flashvars')['playlistsize'])
		var title_size			= parseInt($.data(document.body, 'player_flashvars')['rg_vidtitle.size'])
		var display_title		= $.data(document.body, 'player_flashvars')['rg_vidtitle.includevideotitle']
				
		// SYNTAX:  swfobject.embedSWF(swfUrl, id, width, height, version, expressInstallSwfurl, flashvars, params, attributes, callbackFn) 
		
		// remove old player
		swfobject.removeSWF(p_required.id); 
		$('.flash_player').append('<div id="' + $.data(document.body, 'player_required')['id'] + '"></div>');
		// calculate real estate of the player
		actual_width  = width;
		actual_height = height;
		
		if (display_title == 'true') {
			actual_height += 30;
			$.data(document.body, 'player_flashvars')['rg_vidtitle.size'] = 30;
			$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitleheight'] = 30;
			$("#title_height").val(30);
		}
		else {
			$.data(document.body, 'player_flashvars')['rg_vidtitle.size'] = 0;			
			$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitleheight'] = 0;
			$("#title_height").val(0);
		}
		if (playlist == 'bottom') {
			actual_height += playlist_size;
		}
		if (playlist == 'right') {
			actual_width += playlist_size;
		}		

		// Must set these values for IE bug
		$.data(document.body, 'player_flashvars')['rg_ads.size.height'] 	= actual_height
		$.data(document.body, 'player_flashvars')['rg_ads.size.width'] 		= actual_width
		$.data(document.body, 'player_flashvars')['rg_ads.size.playlist'] = playlist_size

		// insert new player with page changes
		swfobject.embedSWF(p_required.swf, p_required.id, actual_width, actual_height, p_required.version, p_required.expressInstallSwfurl, p_flashvars, p_params, p_attributes );
		
		// update the real estate of the player on the page
		$('.height').text(actual_height);
		$('.width').text(actual_width);
		
		// clear the embed codes since they are no longer valid until the changes are saved.
		var embed_code_text = 'A new embed code with be generated when the player is saved.'
		$('.embed_code').text(embed_code_text);
		$('.js_embed_code').text(embed_code_text);
	};
	
	
	$('.player_required').change(function() {
		$.data(document.body, 'player_required')[this.name.split('[')[1].split(']')[0].replace('__','.').replace('player_','')] = this.value;    
		$.update_player() ;
	});
	
	$('.player_flashvars').change(function() {
		
		$.data(document.body, 'player_flashvars')[this.name.split('[')[1].split(']')[0].replace('__','.').replace('player_','')] = this.value ;
		
		if ($(this).is('.color')) {
			$(this).css('backgroundColor', '#' + this.value);
			$(this).val(this.value.toUpperCase())
		};
		
		if ($(this).is('#volume')) { 
			$("#volume_slider").slider({value: this.value});
		};
				
				
		$.update_player() ;
	});
	
	$('#playlist_id').change(function() {

		var playlistfile = $.data(document.body, 'player_flashvars')['playlistfile'];
		
		if (playlistfile.length != 0) {
			var url = playlistfile.split('/');
			url[url.length -1] =  $.data(document.body, 'playlist_uuids')[this.value];
			$.data(document.body, 'player_flashvars')['playlistfile'] = url.join('/');
			$.update_player() ;			
		};
	});
	
	
	
	if ($('#volume_slider').size()) {
		$("#volume_slider").slider({
				range: "min",
				value: $.data(document.body, 'player_flashvars')['volume'],
				min: 1,
				max: 100,
				slide: function(event, ui) {
					$("#volume").val(ui.value);
					$.data(document.body, 'player_flashvars')['volume'] = ui.value;
				},
				stop: function(event, ui) {
					$("#volume").val(ui.value);
					$.data(document.body, 'player_flashvars')['volume'] = ui.value;
					$.update_player() ;
				}
		});
	};	
		
	
// Player Theme controls

	// hide the select theme if no themes have been saved
	if ($('.theme_apply').children('option').size() == 1) {
		$('#apply_theme_select').hide();
	};
	
	// save the player theme via ajax
	$('.theme_save').click(function() {
		
		if ($('#jw_player_theme_name').fieldValue() == "") {
			alert("Theme Name can't be blank.");
			return false;
		}
		
		var queryString = $('.theme_values').fieldSerialize();
		var company_id  = $('#company_id').fieldValue()[0];
		var player_id   = $('#player_id').fieldValue()[0];
		var url = '/partner/company/' + company_id +'/players/' + player_id + '/save_theme';
		
		
		$.post(url, queryString, function(response) { 
			var callback_result = $.parseJSON(response);
			// check to see if the theme is in the theme select field
			var exists = false;
			$('.theme_apply option').each(function(){
			    if (this.value == callback_result['player_theme']['id']) {
			        exists = true;
			    }
			});
			// if not add to the apply theme select field
			if (!exists) {	$('.theme_apply').append(
				$("<option></option>").attr("value",callback_result['player_theme']['id']
				).text(callback_result['player_theme']['theme_name']));
			}
			$('#apply_theme_select').show();
			}, "script");
		$('#accordion_6').accordion({active: false})
		
		return false;
	});
	
	// Updates the player fields with a saved theme
	(function($) {
		$.update_form_field = function(fields_hash) {
			var theme_params = $.parseJSON(fields_hash['player_theme']['theme_params']);			
			$.each(theme_params, function(value) {
				$('#jw_player_' + value).val(theme_params[value]);
				if (value == 'height' || value == 'width') {
					$.data(document.body, 'player_required')[value] = theme_params[value];    
				} else if (value == 'title_subject_color' ) {
					$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlehtml'] = "<body><span class='vidheader'><font face='Arial Black' color='#" + theme_params[value] + "'>$vidheader</font><font face='Arial'>$vidbody</font></span></body>"
				} else if (value == 'title_body_color' ) {
					$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlecss'] =  "body {font-size:12px; background-color:#000000;} .vidheader {text-indent: 10px; color:#" + theme_params[value] + ";font-size:14px;}"
				}
				else {
					$.data(document.body, 'player_flashvars')[value.replace('player_','').replace('__','.')] = theme_params[value] ;
					if (value == 'volume') { 
						$("#volume_slider").slider({value: theme_params[value]});
					};
				};
			});
		$.update_colors()
		$.update_player()		
		};
	})(jQuery);
	
	// apply a saved theme via ajax to a player
	$('.theme_apply').click(function() {
		if ($('#jw_player_theme_select').fieldValue() == "") {
			return false;
		}
		$.data(document.body, 'theme_loading', true);
		var theme_id = $('.theme_apply').val()
		var company_id = $('#company_id').fieldValue()[0];
		var player_id   = $('#player_id').fieldValue()[0];
		var url = '/partner/company/' + company_id +'/players/' + player_id + '/apply_theme';
		$.getJSON(url, {id: theme_id}, $.update_form_field);
		$.update_colors()
		$('#accordion_5').accordion({active: false})
		$.data(document.body, 'theme_loading', false);
		return false;
	});
	
	// submit a form flag for completing a upload video session via ajax
	
	
	// traps the return key and tabs to the next field
	if ($('#players').size()) {
		$("input").keypress(function (evt) {
		//Deterime where our character code is coming from within the event
		var charCode = evt.charCode || evt.keyCode;
		if (charCode  == 13) { //Enter key's keycode
		return false;
		}
		});
	}
			
	
	// function to dynamically update all color fields 
	
	$.update_colors = function() {
		$('.color').each(function() {
			$(this).css('backgroundColor', '#' + this.value);
		})
	}

	// Colorpicker
	if ($('.color').size()) {
		$.update_colors()
	}
	
	$('.color').ColorPicker({		
		onBeforeShow: function () {	
			$(this).ColorPickerSetColor(this.value);
			$.data(document.body, 'color_field', this);
			},
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			// update the flashvar rg_vidtitle.videotitlehtml if the title color was changed via the ui
		
			if ($.data(document.body, 'color_field').id.split('_')[3] == 'subject') {
				$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlehtml'] = "<body><span class='vidheader'><font face='Arial Black' color='#" + $.data(document.body, 'color_field').value + "'>$vidheader</font><font face='Arial Black' color='#000000'>-</font><font face='Arial'>$vidbody</font></span></body>"
				
				// update the flashvar rg_vidtitle.videotitlecss if the body color was changed via the ui				
			} else if ($.data(document.body, 'color_field').id.split('_')[3] == 'body') {
				$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlecss'] =  "body {font-size:12px; background-color:#000000;} .vidheader {text-indent: 10px; color:#" + $.data(document.body, 'color_field').value + ";font-size:14px;}"
				
				// update player colors via the ui
			} else {
				$.data(document.body, 'player_flashvars')[$.data(document.body, 'color_field').id.split('_')[3]] = $.data(document.body, 'color_field').value ;				
			}
			$.update_player();
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$($.data(document.body, 'color_field')).css('backgroundColor', '#' + hex);
			$($.data(document.body, 'color_field')).val(hex.toUpperCase())
		}
	})
		
	
	// controls the accordian edit fields
	
	if ($('#accordion_0').size()) {
		$("#accordion_0").accordion({
			active: 0,
			collapsible: true,
			autoHeight: false
		});
	};

	if ($('#accordion_1').size()) {
		$("#accordion_1").accordion({
			active: false,
			collapsible: true,
			autoHeight: false
		});
	};
	
	if ($('#accordion_2').size()) {
		$("#accordion_2").accordion({
			active: false,
			collapsible: true,
			autoHeight: false
		});
	};
	
	if ($('#accordion_3').size()) {
		$("#accordion_3").accordion({
			collapsible: true,
			active: false,
			autoHeight: false
		});
	};
	
	if ($('#accordion_4').size()) {
		$("#accordion_4").accordion({
			collapsible: true,
			active: false,
			autoHeight: false
		});
	};
		
	if ($('#accordion_5').size()) {
		$("#accordion_5").accordion({
			collapsible: true,
			active: false,
			autoHeight: false
		});
	};
		
	if ($('#accordion_6').size()) {
		$("#accordion_6").accordion({
			collapsible: true,
			active: false,
			autoHeight: false
		});
	};
		


// Switch the name of the menu pointer to the correct page based on the hidden DIV #menu_selection

	if ($('#menu_selection').size()) {
		var menuSelect = $('#menu_selection').text().trim() + '_menu';
		$('li.' + menuSelect).addClass('active');
	};
		
// Show/Hide the date fields based on the selection of the report type

	if ($('#date_choice').size()) {
		$('#date_2').hide();
		$('#date_3').hide();
		$("#date_choice").change(function() {
			for (var i =1; i < 4; i++) {
				if ( $('#date_choice').val() == i ) {
					$('#date_' + i).show();
				}
				else {
					$('#date_' + i).hide();
				};
			};
		});
	};

// Show/Hide the report details based on the check boxes in the summary view

	if ($('#rg_report').size()) {
		// check all the checkboxes by default
		$('#rg_report :checkbox').removeAttr('checked');
		
		var check_boxes = $('#rg_report :checkbox');
		for (var i =0; i < check_boxes.length; i++) {
			$("#report_" + check_boxes[i].id).hide()
		};
	};
	
	// Toggle the detail for a report summary item when the check box is clicked
	$(':checkbox').click(function() {
		if ($(this).is(':checked')) {
			$("#report_" + this.id).show();
		}
		else {
			$("#report_" + this.id).hide();
		}
	});

	// Hide flash message after 2.5 seconds
	
	if ($('#flash_notice').size()) {
		$('#flash_notice').delay(2500).hide('slow')
	};
	
	// Check and uncheck all all videos on a upload video form

	$('#check-all').click(function() {
		var check_boxes = $(':checkbox');
		if ($(this).is(':checked')) { 
			checked = true;
		}
		else { 
			checked = false;
		};
			
		for (var i =0; i < check_boxes.length; i++) {
		 check_boxes[i].checked = checked;
		};
	});

	$('#check-partners').click(function() {
		var check_boxes = $(':checkbox');
		if ($(this).is(':checked')) { 
			checked1 = true;
		}
		else { 
			checked1 = false;
		};
			
		for (var i =0; i < check_boxes.length; i++) {
			if (check_boxes[i].id != 'check-all') {
				if ($.inArray(check_boxes[i].id.split('_')[check_boxes[i].id.split('_').length -1], ['12', '13', '14', '1']) == -1 ) {
				  check_boxes[i].checked = checked1;
				};
			};
		};
	});
	

	var $video_dialog = $('<div class="dialog"></div>')
		.html('<span class="rotate_logo">Uploading Video File...</span>')
		.dialog({
			dialogClass: 'spinning_logo',
			autoOpen: false,
			height: 140,
			modal: true,
			draggable: false,
			closeOnEscape: false,
			resizable: false
		});

		var $report_dialog = $('<div class="dialog"></div>')
			.html('<span class="rotate_logo">Building Report ...</span>')
			.dialog({
				dialogClass: 'spinning_logo',
				autoOpen: false,
				height: 140,
				modal: true,
				draggable: false,
				closeOnEscape: false,
				resizable: false
			});
			

	
	// Find ALL <form> tags and disable on submit
	// Display modal box when generating reports or uploading videos
	$('form').submit(function(){
		$('.lock_from_edit').removeAttr("disabled"); 
    // On submit disable its submit button
		//     $('input[type=submit]', this).attr('disabled', 'disabled');
		// $('input[type=submit]').css('background', '#959594');
		if ($('#video_upload_page').size()) {
			$video_dialog.dialog('open');
		};
		if ($('#report_generation_page').size()) {
			$report_dialog.dialog('open');
		};
		
	});
	
			
// Javascript that came with the template
// *** Not sure if it works with the restructuring of the template ***
// Search input text handling on focus
	var $searchq = $("#search-q").attr("value");
    $('#search-q.text').css('color', '#999');
	$('#search-q').focus(function(){
		if ( $(this).attr('value') == $searchq) {
			$(this).css('color', '#555');
			$(this).attr('value', '');
		}
	});
	$('#search-q').blur(function(){
		if ( $(this).attr('value') == '' ) {
			$(this).attr('value', $searchq);
			$(this).css('color', '#999');
		}
	});
// Switch categories
	$('#h-wrap').hover(function(){
			$(this).toggleClass('active');
			$("#h-wrap ul").css('display', 'block');
		}, function(){
			$(this).toggleClass('active');
			$("#h-wrap ul").css('display', 'none');
	});
	
// Handling with tables (adding first and last classes for borders and adding alternate bgs)
	$('tbody tr:even').addClass('even');
	$('table.grid tbody tr:last-child').addClass('last');
	$('tr th:first-child, tr td:first-child').addClass('first');
	$('tr th:last-child, tr td:last-child').addClass('last');
	$('form.fields fieldset:last-child').addClass('last');
	
// Handling with lists (alternate bgs)
	$('ul.simple li:even').addClass('even');
	
// Handling with grid views (adding first and last classes for borders and adding alternate bgs)
	$('.grid .line:even').addClass('even');
	$('.grid .line:first-child').addClass('firstline');
	$('.grid .line:last-child').addClass('lastline');
	
// Tabs switching
	$('#box1 .content#box1-grid').hide(); // hide content related to inactive tab by default
	$('#box1 .header ul a').click(function(){
		$('#box1 .header ul a').removeClass('active');
		$(this).addClass('active'); // make clicked tab active
		$('#box1 .content').hide(); // hide all content
		$('#box1').find('#' + $(this).attr('rel')).show(); // and show content related to clicked tab
		return false;
	});
	
});

// alert($('#date_choice').val())


/* 
 * flowplayer.js 3.2.4. The Flowplayer API
 * 
 * Copyright 2009 Flowplayer Oy
 * 
 * This file is part of Flowplayer.
 * 
 * Flowplayer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Flowplayer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Flowplayer.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Date: 2010-08-25 12:48:46 +0000 (Wed, 25 Aug 2010)
 * Revision: 551 
 */
(function(){function g(o){console.log("$f.fireEvent",[].slice.call(o))}function k(q){if(!q||typeof q!="object"){return q}var o=new q.constructor();for(var p in q){if(q.hasOwnProperty(p)){o[p]=k(q[p])}}return o}function m(t,q){if(!t){return}var o,p=0,r=t.length;if(r===undefined){for(o in t){if(q.call(t[o],o,t[o])===false){break}}}else{for(var s=t[0];p<r&&q.call(s,p,s)!==false;s=t[++p]){}}return t}function c(o){return document.getElementById(o)}function i(q,p,o){if(typeof p!="object"){return q}if(q&&p){m(p,function(r,s){if(!o||typeof s!="function"){q[r]=s}})}return q}function n(s){var q=s.indexOf(".");if(q!=-1){var p=s.slice(0,q)||"*";var o=s.slice(q+1,s.length);var r=[];m(document.getElementsByTagName(p),function(){if(this.className&&this.className.indexOf(o)!=-1){r.push(this)}});return r}}function f(o){o=o||window.event;if(o.preventDefault){o.stopPropagation();o.preventDefault()}else{o.returnValue=false;o.cancelBubble=true}return false}function j(q,o,p){q[o]=q[o]||[];q[o].push(p)}function e(){return"_"+(""+Math.random()).slice(2,10)}var h=function(t,r,s){var q=this,p={},u={};q.index=r;if(typeof t=="string"){t={url:t}}i(this,t,true);m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","),function(){var v="on"+this;if(v.indexOf("*")!=-1){v=v.slice(0,v.length-1);var w="onBefore"+v.slice(2);q[w]=function(x){j(u,w,x);return q}}q[v]=function(x){j(u,v,x);return q};if(r==-1){if(q[w]){s[w]=q[w]}if(q[v]){s[v]=q[v]}}});i(this,{onCuepoint:function(x,w){if(arguments.length==1){p.embedded=[null,x];return q}if(typeof x=="number"){x=[x]}var v=e();p[v]=[x,w];if(s.isLoaded()){s._api().fp_addCuepoints(x,r,v)}return q},update:function(w){i(q,w);if(s.isLoaded()){s._api().fp_updateClip(w,r)}var v=s.getConfig();var x=(r==-1)?v.clip:v.playlist[r];i(x,w,true)},_fireEvent:function(v,y,w,A){if(v=="onLoad"){m(p,function(B,C){if(C[0]){s._api().fp_addCuepoints(C[0],r,B)}});return false}A=A||q;if(v=="onCuepoint"){var z=p[y];if(z){return z[1].call(s,A,w)}}if(y&&"onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v)!=-1){i(A,y);if(y.metaData){if(!A.duration){A.duration=y.metaData.duration}else{A.fullDuration=y.metaData.duration}}}var x=true;m(u[v],function(){x=this.call(s,A,y,w)});return x}});if(t.onCuepoint){var o=t.onCuepoint;q.onCuepoint.apply(q,typeof o=="function"?[o]:o);delete t.onCuepoint}m(t,function(v,w){if(typeof w=="function"){j(u,v,w);delete t[v]}});if(r==-1){s.onCuepoint=this.onCuepoint}};var l=function(p,r,q,t){var o=this,s={},u=false;if(t){i(s,t)}m(r,function(v,w){if(typeof w=="function"){s[v]=w;delete r[v]}});i(this,{animate:function(y,z,x){if(!y){return o}if(typeof z=="function"){x=z;z=500}if(typeof y=="string"){var w=y;y={};y[w]=z;z=500}if(x){var v=e();s[v]=x}if(z===undefined){z=500}r=q._api().fp_animate(p,y,z,v);return o},css:function(w,x){if(x!==undefined){var v={};v[w]=x;w=v}r=q._api().fp_css(p,w);i(o,r);return o},show:function(){this.display="block";q._api().fp_showPlugin(p);return o},hide:function(){this.display="none";q._api().fp_hidePlugin(p);return o},toggle:function(){this.display=q._api().fp_togglePlugin(p);return o},fadeTo:function(y,x,w){if(typeof x=="function"){w=x;x=500}if(w){var v=e();s[v]=w}this.display=q._api().fp_fadeTo(p,y,x,v);this.opacity=y;return o},fadeIn:function(w,v){return o.fadeTo(1,w,v)},fadeOut:function(w,v){return o.fadeTo(0,w,v)},getName:function(){return p},getPlayer:function(){return q},_fireEvent:function(w,v,x){if(w=="onUpdate"){var z=q._api().fp_getPlugin(p);if(!z){return}i(o,z);delete o.methods;if(!u){m(z.methods,function(){var B=""+this;o[B]=function(){var C=[].slice.call(arguments);var D=q._api().fp_invoke(p,B,C);return D==="undefined"||D===undefined?o:D}});u=true}}var A=s[w];if(A){var y=A.apply(o,v);if(w.slice(0,1)=="_"){delete s[w]}return y}return o}})};function b(q,G,t){var w=this,v=null,D=false,u,s,F=[],y={},x={},E,r,p,C,o,A;i(w,{id:function(){return E},isLoaded:function(){return(v!==null&&v.fp_play!==undefined&&!D)},getParent:function(){return q},hide:function(H){if(H){q.style.height="0px"}if(w.isLoaded()){v.style.height="0px"}return w},show:function(){q.style.height=A+"px";if(w.isLoaded()){v.style.height=o+"px"}return w},isHidden:function(){return w.isLoaded()&&parseInt(v.style.height,10)===0},load:function(J){if(!w.isLoaded()&&w._fireEvent("onBeforeLoad")!==false){var H=function(){u=q.innerHTML;if(u&&!flashembed.isSupported(G.version)){q.innerHTML=""}if(J){J.cached=true;j(x,"onLoad",J)}flashembed(q,G,{config:t})};var I=0;m(a,function(){this.unload(function(K){if(++I==a.length){H()}})})}return w},unload:function(J){if(this.isFullscreen()&&/WebKit/i.test(navigator.userAgent)){if(J){J(false)}return w}if(u.replace(/\s/g,"")!==""){if(w._fireEvent("onBeforeUnload")===false){if(J){J(false)}return w}D=true;try{if(v){v.fp_close();w._fireEvent("onUnload")}}catch(H){}var I=function(){v=null;q.innerHTML=u;D=false;if(J){J(true)}};setTimeout(I,50)}else{if(J){J(false)}}return w},getClip:function(H){if(H===undefined){H=C}return F[H]},getCommonClip:function(){return s},getPlaylist:function(){return F},getPlugin:function(H){var J=y[H];if(!J&&w.isLoaded()){var I=w._api().fp_getPlugin(H);if(I){J=new l(H,I,w);y[H]=J}}return J},getScreen:function(){return w.getPlugin("screen")},getControls:function(){return w.getPlugin("controls")._fireEvent("onUpdate")},getLogo:function(){try{return w.getPlugin("logo")._fireEvent("onUpdate")}catch(H){}},getPlay:function(){return w.getPlugin("play")._fireEvent("onUpdate")},getConfig:function(H){return H?k(t):t},getFlashParams:function(){return G},loadPlugin:function(K,J,M,L){if(typeof M=="function"){L=M;M={}}var I=L?e():"_";w._api().fp_loadPlugin(K,J,M,I);var H={};H[I]=L;var N=new l(K,null,w,H);y[K]=N;return N},getState:function(){return w.isLoaded()?v.fp_getState():-1},play:function(I,H){var J=function(){if(I!==undefined){w._api().fp_play(I,H)}else{w._api().fp_play()}};if(w.isLoaded()){J()}else{if(D){setTimeout(function(){w.play(I,H)},50)}else{w.load(function(){J()})}}return w},getVersion:function(){var I="flowplayer.js 3.2.4";if(w.isLoaded()){var H=v.fp_getVersion();H.push(I);return H}return I},_api:function(){if(!w.isLoaded()){throw"Flowplayer "+w.id()+" not loaded when calling an API method"}return v},setClip:function(H){w.setPlaylist([H]);return w},getIndex:function(){return p},_swfHeight:function(){return v.clientHeight}});m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","),function(){var H="on"+this;if(H.indexOf("*")!=-1){H=H.slice(0,H.length-1);var I="onBefore"+H.slice(2);w[I]=function(J){j(x,I,J);return w}}w[H]=function(J){j(x,H,J);return w}});m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed,setKeyboardShortcutsEnabled,isKeyboardShortcutsEnabled").split(","),function(){var H=this;w[H]=function(J,I){if(!w.isLoaded()){return w}var K=null;if(J!==undefined&&I!==undefined){K=v["fp_"+H](J,I)}else{K=(J===undefined)?v["fp_"+H]():v["fp_"+H](J)}return K==="undefined"||K===undefined?w:K}});w._fireEvent=function(Q){if(typeof Q=="string"){Q=[Q]}var R=Q[0],O=Q[1],M=Q[2],L=Q[3],K=0;if(t.debug){g(Q)}if(!w.isLoaded()&&R=="onLoad"&&O=="player"){v=v||c(r);o=w._swfHeight();m(F,function(){this._fireEvent("onLoad")});m(y,function(S,T){T._fireEvent("onUpdate")});s._fireEvent("onLoad")}if(R=="onLoad"&&O!="player"){return}if(R=="onError"){if(typeof O=="string"||(typeof O=="number"&&typeof M=="number")){O=M;M=L}}if(R=="onContextMenu"){m(t.contextMenu[O],function(S,T){T.call(w)});return}if(R=="onPluginEvent"||R=="onBeforePluginEvent"){var H=O.name||O;var I=y[H];if(I){I._fireEvent("onUpdate",O);return I._fireEvent(M,Q.slice(3))}return}if(R=="onPlaylistReplace"){F=[];var N=0;m(O,function(){F.push(new h(this,N++,w))})}if(R=="onClipAdd"){if(O.isInStream){return}O=new h(O,M,w);F.splice(M,0,O);for(K=M+1;K<F.length;K++){F[K].index++}}var P=true;if(typeof O=="number"&&O<F.length){C=O;var J=F[O];if(J){P=J._fireEvent(R,M,L)}if(!J||P!==false){P=s._fireEvent(R,M,L,J)}}m(x[R],function(){P=this.call(w,O,M);if(this.cached){x[R].splice(K,1)}if(P===false){return false}K++});return P};function B(){if($f(q)){$f(q).getParent().innerHTML="";p=$f(q).getIndex();a[p]=w}else{a.push(w);p=a.length-1}A=parseInt(q.style.height,10)||q.clientHeight;E=q.id||"fp"+e();r=G.id||E+"_api";G.id=r;t.playerId=E;if(typeof t=="string"){t={clip:{url:t}}}if(typeof t.clip=="string"){t.clip={url:t.clip}}t.clip=t.clip||{};if(q.getAttribute("href",2)&&!t.clip.url){t.clip.url=q.getAttribute("href",2)}s=new h(t.clip,-1,w);t.playlist=t.playlist||[t.clip];var I=0;m(t.playlist,function(){var K=this;if(typeof K=="object"&&K.length){K={url:""+K}}m(t.clip,function(L,M){if(M!==undefined&&K[L]===undefined&&typeof M!="function"){K[L]=M}});t.playlist[I]=K;K=new h(K,I,w);F.push(K);I++});m(t,function(K,L){if(typeof L=="function"){if(s[K]){s[K](L)}else{j(x,K,L)}delete t[K]}});m(t.plugins,function(K,L){if(L){y[K]=new l(K,L,w)}});if(!t.plugins||t.plugins.controls===undefined){y.controls=new l("controls",null,w)}y.canvas=new l("canvas",null,w);u=q.innerHTML;function J(L){var K=w.hasiPadSupport&&w.hasiPadSupport();if(/iPad|iPhone|iPod/i.test(navigator.userAgent)&&!/.flv$/i.test(F[0].url)&&!K){return true}if(!w.isLoaded()&&w._fireEvent("onBeforeClick")!==false){w.load()}return f(L)}function H(){if(u.replace(/\s/g,"")!==""){if(q.addEventListener){q.addEventListener("click",J,false)}else{if(q.attachEvent){q.attachEvent("onclick",J)}}}else{if(q.addEventListener){q.addEventListener("click",f,false)}w.load()}}setTimeout(H,0)}if(typeof q=="string"){var z=c(q);if(!z){throw"Flowplayer cannot access element: "+q}q=z;B()}else{B()}}var a=[];function d(o){this.length=o.length;this.each=function(p){m(o,p)};this.size=function(){return o.length}}window.flowplayer=window.$f=function(){var p=null;var o=arguments[0];if(!arguments.length){m(a,function(){if(this.isLoaded()){p=this;return false}});return p||a[0]}if(arguments.length==1){if(typeof o=="number"){return a[o]}else{if(o=="*"){return new d(a)}m(a,function(){if(this.id()==o.id||this.id()==o||this.getParent()==o){p=this;return false}});return p}}if(arguments.length>1){var t=arguments[1],q=(arguments.length==3)?arguments[2]:{};if(typeof t=="string"){t={src:t}}t=i({bgcolor:"#000000",version:[9,0],expressInstall:"http://static.flowplayer.org/swf/expressinstall.swf",cachebusting:true},t);if(typeof o=="string"){if(o.indexOf(".")!=-1){var s=[];m(n(o),function(){s.push(new b(this,k(t),k(q)))});return new d(s)}else{var r=c(o);return new b(r!==null?r:o,t,q)}}else{if(o){return new b(o,t,q)}}}return null};i(window.$f,{fireEvent:function(){var o=[].slice.call(arguments);var q=$f(o[0]);return q?q._fireEvent(o.slice(1)):null},addPlugin:function(o,p){b.prototype[o]=p;return $f},each:m,extend:i});if(typeof jQuery=="function"){jQuery.fn.flowplayer=function(q,p){if(!arguments.length||typeof arguments[0]=="number"){var o=[];this.each(function(){var r=$f(this);if(r){o.push(r)}});return arguments.length?o[arguments[0]]:new d(o)}return this.each(function(){$f(this,k(q),p?k(p):{})})}}})();(function(){var h=document.all,j="http://www.adobe.com/go/getflashplayer",c=typeof jQuery=="function",e=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,b={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};if(window.attachEvent){window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})}function i(m,l){if(l){for(var f in l){if(l.hasOwnProperty(f)){m[f]=l[f]}}}return m}function a(f,n){var m=[];for(var l in f){if(f.hasOwnProperty(l)){m[l]=n(f[l])}}return m}window.flashembed=function(f,m,l){if(typeof f=="string"){f=document.getElementById(f.replace("#",""))}if(!f){return}if(typeof m=="string"){m={src:m}}return new d(f,i(i({},b),m),l)};var g=i(window.flashembed,{conf:b,getVersion:function(){var m,f;try{f=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(o){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");f=m&&m.GetVariable("$version")}catch(n){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");f=m&&m.GetVariable("$version")}catch(l){}}}f=e.exec(f);return f?[f[1],f[3]]:[0,0]},asString:function(l){if(l===null||l===undefined){return null}var f=typeof l;if(f=="object"&&l.push){f="array"}switch(f){case"string":l=l.replace(new RegExp('(["\\\\])',"g"),"\\$1");l=l.replace(/^\s?(\d+\.?\d+)%/,"$1pct");return'"'+l+'"';case"array":return"["+a(l,function(o){return g.asString(o)}).join(",")+"]";case"function":return'"function()"';case"object":var m=[];for(var n in l){if(l.hasOwnProperty(n)){m.push('"'+n+'":'+g.asString(l[n]))}}return"{"+m.join(",")+"}"}return String(l).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(o,l){o=i({},o);var n='<object width="'+o.width+'" height="'+o.height+'" id="'+o.id+'" name="'+o.id+'"';if(o.cachebusting){o.src+=((o.src.indexOf("?")!=-1?"&":"?")+Math.random())}if(o.w3c||!h){n+=' data="'+o.src+'" type="application/x-shockwave-flash"'}else{n+=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'}n+=">";if(o.w3c||h){n+='<param name="movie" value="'+o.src+'" />'}o.width=o.height=o.id=o.w3c=o.src=null;o.onFail=o.version=o.expressInstall=null;for(var m in o){if(o[m]){n+='<param name="'+m+'" value="'+o[m]+'" />'}}var p="";if(l){for(var f in l){if(l[f]){var q=l[f];p+=f+"="+(/function|object/.test(typeof q)?g.asString(q):q)+"&"}}p=p.slice(0,-1);n+='<param name="flashvars" value=\''+p+"' />"}n+="</object>";return n},isSupported:function(f){return k[0]>f[0]||k[0]==f[0]&&k[1]>=f[1]}});var k=g.getVersion();function d(f,n,m){if(g.isSupported(n.version)){f.innerHTML=g.getHTML(n,m)}else{if(n.expressInstall&&g.isSupported([6,65])){f.innerHTML=g.getHTML(i(n,{src:n.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title})}else{if(!f.innerHTML.replace(/\s/g,"")){f.innerHTML="<h2>Flash version "+n.version+" or greater is required</h2><h3>"+(k[0]>0?"Your version is "+k:"You have no flash plugin installed")+"</h3>"+(f.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+j+"'>here</a></p>");if(f.tagName=="A"){f.onclick=function(){location.href=j}}}if(n.onFail){var l=n.onFail.call(this);if(typeof l=="string"){f.innerHTML=l}}}}if(h){window[n.id]=document.getElementById(n.id)}i(this,{getRoot:function(){return f},getOptions:function(){return n},getConf:function(){return m},getApi:function(){return f.firstChild}})}if(c){jQuery.tools=jQuery.tools||{version:"3.2.4"};jQuery.tools.flashembed={conf:b};jQuery.fn.flashembed=function(l,f){return this.each(function(){$(this).data("flashembed",flashembed(this,l,f))})}}})();

/**
 * flowplayer.playlist 3.0.8. Flowplayer JavaScript plugin.
 * 
 * This file is part of Flowplayer, http://flowplayer.org
 *
 * Author: Tero Piirainen, <info@flowplayer.org>
 * Copyright (c) 2008-2010 Flowplayer Ltd
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * SEE: http://www.opensource.org/licenses
 * 
 * Date: 2010-05-04 05:33:23 +0000 (Tue, 04 May 2010)
 * Revision: 3405 
 */ 
(function($) {
	
	$f.addPlugin("playlist", function(wrap, options) {


		// self points to current Player instance
		var self = this;	
		
		var opts = {
			playingClass: 'playing',
			pausedClass: 'paused',
			progressClass:'progress',
			template: '<a href="${url}">${title}</a>',
			loop: false,
			playOnClick: true,
			manual: false
		};		
		
		$.extend(opts, options);
		wrap = $(wrap);		
		var manual = self.getPlaylist().length <= 1 || opts.manual; 
		var els = null;
		
		
//{{{ "private" functions
				
		function toString(clip) {
			var el = template;
			
			$.each(clip, function(key, val) {	
				if (!$.isFunction(val)) {
					el = el.replace("$\{" +key+ "\}", val).replace("$%7B" +key+ "%7D", val);			
				}
			}); 
			return el;
		}
		
		// assign onClick event for each clip
		function bindClicks() {			
			els = getEls().unbind("click.playlist").bind("click.playlist", function() {
				return play($(this), els.index(this));						
			});		
		}
		
		function buildPlaylist() {
			wrap.empty();
			
			$.each(self.getPlaylist(), function() {  
				wrap.append(toString(this)); 
			});				
			
			bindClicks();
		} 

		
		function play(el, clip)  {
		
			if (el.hasClass(opts.playingClass) || el.hasClass(opts.pausedClass)) {
				self.toggle();
				
			} else {
				el.addClass(opts.progressClass);
				self.play(clip); 							
			}			
			
			return false;
		}	
		
		
		function clearCSS() {
			if (manual) { els = getEls(); }
			els.removeClass(opts.playingClass);
			els.removeClass(opts.pausedClass);
			els.removeClass(opts.progressClass);			
		}
		
		function getEl(clip) {
			return (manual) ? els.filter("[href=" + clip.originalUrl + "]") : els.eq(clip.index);	
		}
		
		function getEls() {
			var els = wrap.find("a");
			return els.length ? els : wrap.children();
		}
//}}}  
		 
		/* setup playlists with onClick handlers */ 
		
		// internal playlist
		if (!manual) {
			
			var template = wrap.is(":empty") ? opts.template : wrap.html(); 
			buildPlaylist();			
			
			
		// manual playlist
		} else {
			
			els = getEls();			
			
			// allows dynamic addition of elements
			if ($.isFunction(els.live)) {
				var foo = $(wrap.selector + " a");
				if (!foo.length) { foo = $(wrap.selector + " > *"); }
				
				foo.live("click", function() {
					var el = $(this);
					return play(el, el.attr("href"));
				});
				
			} else {
				els.click(function() {
					var el = $(this);
					return play(el, el.attr("href"));
				});					
			}
						 
					
			// setup player to play first clip
			var clip = self.getClip(0);
			if (!clip.url && opts.playOnClick) {
				clip.update({url: els.eq(0).attr("href")});		
			}   
			
		}
		
		// onBegin
		self.onBegin(function(clip) {
			clearCSS();		
			getEl(clip).addClass(opts.playingClass);
		});	
		
		// onPause	
		self.onPause(function(clip) {
			getEl(clip).removeClass(opts.playingClass).addClass(opts.pausedClass);		
		});	
		
		// onResume
		self.onResume(function(clip) {
			getEl(clip).removeClass(opts.pausedClass).addClass(opts.playingClass);		
		});		
		
		// what happens when clip ends ?
		if (!opts.loop && !manual) {
			
			// stop the playback exept on the last clip, which is stopped by default
			self.onBeforeFinish(function(clip) {
				if (!clip.isInStream && clip.index < els.length -1) {
					return false;
				}
			}); 
		}
		
		// on manual setups perform looping here
		if (manual && opts.loop) {
			self.onBeforeFinish(function(clip) {
				var el = getEl(clip);
				if (el.next().length) {
					el.next().click();	 		
				} else {
					els.eq(0).click();	
				} 
				return false;				
			}); 
		}
		
		// onUnload
		self.onUnload(function() {
			clearCSS();		
		});
		
		// onPlaylistReplace
		if (!manual) {
			self.onPlaylistReplace(function() {
				buildPlaylist();		
			});
		}
		
		// onClipAdd
		self.onClipAdd(function(clip, index) {	
			els.eq(index).before(toString(clip));			
			bindClicks(); 
		});		
		
		return self;
		
	});
		
})(jQuery);		


// jQuery(document).ready(function() {
// 	
// 	$f("rg_player", "/FlowPlayer/flowplayer-3.2.4.swf", {
// 	    clip: {
// 	        url: '/FlowPlayer/830010.flv',
// 	        autoPlay: true,
// 	        autoBuffering: true
// 	    },
// 	    plugins: {
// 	        controls: null
// 	    },
// 	    onLoad: function(){
// 	        alert("player loaded");
// 	    }
// 	});
// 	
// };


/**
 * FusionCharts: Flash Player detection and Chart embedding.
 * Version 1.2.3F ( 22 November 2008) - Specialized for FusionChartsFREE 
 * 					Checking Flash Version >=6 and added updateChartXML() for FREE Charts.
 * Version: 1.2.3 (1st September, 2008) - Added Fix for % and & characters, scaled dimensions, fixes in to properly handling of double quotes and single quotes in setDataXML() function.
 * Version: 1.2.2 (10th July, 2008) - Added Fix for % scaled dimensions, fixes in setDataXML() and setDataURL() functions
 * Version: 1.2.1 (21st December, 2007) - Added setting up Transparent/opaque mode: setTransparent() function 
 * Version: 1.2 (1st November, 2007) - Added FORM fixes for IE 
 * Version: 1.1 (29th June, 2007) - Added Player detection, New conditional fixes for IE
 *
 * Morphed from SWFObject (http://blog.deconcept.com/swfobject/) under MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof infosoftglobal == "undefined") var infosoftglobal = new Object();
if(typeof infosoftglobal.FusionChartsUtil == "undefined") infosoftglobal.FusionChartsUtil = new Object();
infosoftglobal.FusionCharts = function(swf, id, w, h, debugMode, registerWithJS, c, scaleMode, lang, detectFlashVersion, autoInstallRedirect){
	if (!document.getElementById) { return; }
	
	//Flag to see whether data has been set initially
	this.initialDataSet = false;
	
	//Create container objects
	this.params = new Object();
	this.variables = new Object();
	this.attributes = new Array();
	
	//Set attributes for the SWF
	if(swf) { this.setAttribute('swf', swf); }
	if(id) { this.setAttribute('id', id); }

	w=w.toString().replace(/\%$/,"%25");
	if(w) { this.setAttribute('width', w); }
	h=h.toString().replace(/\%$/,"%25");
	if(h) { this.setAttribute('height', h); }

	
	//Set background color
	if(c) { this.addParam('bgcolor', c); }
	
	//Set Quality	
	this.addParam('quality', 'high');
	
	//Add scripting access parameter
	this.addParam('allowScriptAccess', 'always');
	
	//Pass width and height to be appended as chartWidth and chartHeight
	this.addVariable('chartWidth', w);
	this.addVariable('chartHeight', h);

	//Whether in debug mode
	debugMode = debugMode ? debugMode : 0;
	this.addVariable('debugMode', debugMode);
	//Pass DOM ID to Chart
	this.addVariable('DOMId', id);
	//Whether to registed with JavaScript
	registerWithJS = registerWithJS ? registerWithJS : 0;
	this.addVariable('registerWithJS', registerWithJS);
	
	//Scale Mode of chart
	scaleMode = scaleMode ? scaleMode : 'noScale';
	this.addVariable('scaleMode', scaleMode);
	
	//Application Message Language
	lang = lang ? lang : 'EN';
	this.addVariable('lang', lang);
	
	//Whether to auto detect and re-direct to Flash Player installation
	this.detectFlashVersion = detectFlashVersion?detectFlashVersion:1;
	this.autoInstallRedirect = autoInstallRedirect?autoInstallRedirect:1;
	
	//Ger Flash Player version 
	this.installedVer = infosoftglobal.FusionChartsUtil.getPlayerVersion();
	
	if (!window.opera && document.all && this.installedVer.major > 7) {
		// Only add the onunload cleanup if the Flash Player version supports External Interface and we are in IE
		infosoftglobal.FusionCharts.doPrepUnload = true;
	}
}

infosoftglobal.FusionCharts.prototype = {
	setAttribute: function(name, value){
		this.attributes[name] = value;
	},
	getAttribute: function(name){
		return this.attributes[name];
	},
	addParam: function(name, value){
		this.params[name] = value;
	},
	getParams: function(){
		return this.params;
	},
	addVariable: function(name, value){
		this.variables[name] = value;
	},
	getVariable: function(name){
		return this.variables[name];
	},
	getVariables: function(){
		return this.variables;
	},
	getVariablePairs: function(){
		var variablePairs = new Array();
		var key;
		var variables = this.getVariables();
		for(key in variables){
			variablePairs.push(key +"="+ variables[key]);
		}
		return variablePairs;
	},
	getSWFHTML: function() {
		var swfNode = "";
		if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) { 
			// netscape plugin architecture			
			swfNode = '<embed type="application/x-shockwave-flash" src="'+ this.getAttribute('swf') +'" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'"  ';
			swfNode += ' id="'+ this.getAttribute('id') +'" name="'+ this.getAttribute('id') +'" ';
			var params = this.getParams();
			 for(var key in params){ swfNode += [key] +'="'+ params[key] +'" '; }
			var pairs = this.getVariablePairs().join("&");
			 if (pairs.length > 0){ swfNode += 'flashvars="'+ pairs +'"'; }
			swfNode += '/>';
		} else { // PC IE			
			swfNode = '<object id="'+ this.getAttribute('id') +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+ this.getAttribute('width') +'" height="'+ this.getAttribute('height') +'">';
			swfNode += '<param name="movie" value="'+ this.getAttribute('swf') +'" />';
			var params = this.getParams();
			for(var key in params) {
			 swfNode += '<param name="'+ key +'" value="'+ params[key] +'" />';
			}
			var pairs = this.getVariablePairs().join("&");			
			if(pairs.length > 0) {swfNode += '<param name="flashvars" value="'+ pairs +'" />';}
			swfNode += "</object>";
		}
		return swfNode;
	},
	setDataURL: function(strDataURL){
		//This method sets the data URL for the chart.
		//If being set initially
		if (this.initialDataSet==false){
			this.addVariable('dataURL',strDataURL);
			//Update flag
			this.initialDataSet = true;
		}else{
			//Else, we update the chart data using External Interface
			//Get reference to chart object
			var chartObj = infosoftglobal.FusionChartsUtil.getChartObject(this.getAttribute('id'));
			
			if (!chartObj.setDataURL)
			{
				__flash__addCallback(chartObj, "setDataURL");
			}
			
			chartObj.setDataURL(strDataURL);
		}
	},
	//This function :
	//fixes the double quoted attributes to single quotes
	//Encodes all quotes inside attribute values
	//Encodes % to %25 and & to %26;
	encodeDataXML: function(strDataXML){
		
			var regExpReservedCharacters=["\\$","\\+"];
			var arrDQAtt=strDataXML.match(/=\s*\".*?\"/g);
			if (arrDQAtt){
				for(var i=0;i<arrDQAtt.length;i++){
					var repStr=arrDQAtt[i].replace(/^=\s*\"|\"$/g,"");
					repStr=repStr.replace(/\'/g,"%26apos;");
					var strTo=strDataXML.indexOf(arrDQAtt[i]);
					var repStrr="='"+repStr+"'";
					var strStart=strDataXML.substring(0,strTo);
					var strEnd=strDataXML.substring(strTo+arrDQAtt[i].length);
					var strDataXML=strStart+repStrr+strEnd;
				}
			}
			
			strDataXML=strDataXML.replace(/\"/g,"%26quot;");
			strDataXML=strDataXML.replace(/%(?![\da-f]{2}|[\da-f]{4})/ig,"%25");
			strDataXML=strDataXML.replace(/\&/g,"%26");

			return strDataXML;

	},
	setDataXML: function(strDataXML){
		//If being set initially
		if (this.initialDataSet==false){
			//This method sets the data XML for the chart INITIALLY.
			this.addVariable('dataXML',this.encodeDataXML(strDataXML));
			//Update flag
			this.initialDataSet = true;
		}else{
			//Else, we update the chart data using External Interface
			//Get reference to chart object
			var chartObj = infosoftglobal.FusionChartsUtil.getChartObject(this.getAttribute('id'));
			chartObj.setDataXML(strDataXML);
		}
	},
	setTransparent: function(isTransparent){
		//Sets chart to transparent mode when isTransparent is true (default)
		//When no parameter is passed, we assume transparent to be true.
		if(typeof isTransparent=="undefined") {
			isTransparent=true;
		}			
		//Set the property
		if(isTransparent)
			this.addParam('WMode', 'transparent');
		else
			this.addParam('WMode', 'Opaque');
	},
	
	render: function(elementId){
		//First check for installed version of Flash Player - we need a minimum of 6
		if((this.detectFlashVersion==1) && (this.installedVer.major < 6)){
			if (this.autoInstallRedirect==1){
				//If we can auto redirect to install the player?
				var installationConfirm = window.confirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.");
				if (installationConfirm){
					window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
				}else{
					return false;
				}
			}else{
				//Else, do not take an action. It means the developer has specified a message in the DIV (and probably a link).
				//So, expect the developers to provide a course of way to their end users.
				//window.alert("You need Adobe Flash Player 8 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. ");
				return false;
			}			
		}else{
			//Render the chart
			var n = (typeof elementId == 'string') ? document.getElementById(elementId) : elementId;
			n.innerHTML = this.getSWFHTML();
			
			//Added <FORM> compatibility
			//Check if it's added in Mozilla embed array or if already exits 
			if(!document.embeds[this.getAttribute('id')] && !window[this.getAttribute('id')])
		      	window[this.getAttribute('id')]=document.getElementById(this.getAttribute('id')); 
				//or else document.forms[formName/formIndex][chartId]			
			return true;		
		}
	}
}

/* ---- detection functions ---- */
infosoftglobal.FusionChartsUtil.getPlayerVersion = function(){
	var PlayerVersion = new infosoftglobal.PlayerVersion([0,0,0]);
	if(navigator.plugins && navigator.mimeTypes.length){
		var x = navigator.plugins["Shockwave Flash"];
		if(x && x.description) {
			PlayerVersion = new infosoftglobal.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
		}
	}else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0){ 
		//If Windows CE
		var axo = 1;
		var counter = 3;
		while(axo) {
			try {
				counter++;
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+ counter);
				PlayerVersion = new infosoftglobal.PlayerVersion([counter,0,0]);
			} catch (e) {
				axo = null;
			}
		}
	} else { 
		// Win IE (non mobile)
		// Do minor version lookup in IE, but avoid Flash Player 6 crashing issues
		try{
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		}catch(e){
			try {
				var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
				PlayerVersion = new infosoftglobal.PlayerVersion([6,0,21]);
				axo.AllowScriptAccess = "always"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
			} catch(e) {
				if (PlayerVersion.major == 6) {
					return PlayerVersion;
				}
			}
			try {
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			} catch(e) {}
		}
		if (axo != null) {
			PlayerVersion = new infosoftglobal.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
		}
	}
	return PlayerVersion;
}
infosoftglobal.PlayerVersion = function(arrVersion){
	this.major = arrVersion[0] != null ? parseInt(arrVersion[0]) : 0;
	this.minor = arrVersion[1] != null ? parseInt(arrVersion[1]) : 0;
	this.rev = arrVersion[2] != null ? parseInt(arrVersion[2]) : 0;
}
// ------------ Fix for Out of Memory Bug in IE in FP9 ---------------//
/* Fix for video streaming bug */
infosoftglobal.FusionChartsUtil.cleanupSWFs = function() {
	var objects = document.getElementsByTagName("OBJECT");
	for (var i = objects.length - 1; i >= 0; i--) {
		objects[i].style.display = 'none';
		for (var x in objects[i]) {
			if (typeof objects[i][x] == 'function') {
				objects[i][x] = function(){};
			}
		}
	}
}
// Fixes bug in fp9
if (infosoftglobal.FusionCharts.doPrepUnload) {
	if (!infosoftglobal.unloadSet) {
		infosoftglobal.FusionChartsUtil.prepUnload = function() {
			__flash_unloadHandler = function(){};
			__flash_savedUnloadHandler = function(){};
			window.attachEvent("onunload", infosoftglobal.FusionChartsUtil.cleanupSWFs);
		}
		window.attachEvent("onbeforeunload", infosoftglobal.FusionChartsUtil.prepUnload);
		infosoftglobal.unloadSet = true;
	}
}
/* Add document.getElementById if needed (mobile IE < 5) */
if (!document.getElementById && document.all) { document.getElementById = function(id) { return document.all[id]; }}
/* Add Array.push if needed (ie5) */
if (Array.prototype.push == null) { Array.prototype.push = function(item) { this[this.length] = item; return this.length; }}

/* Function to return Flash Object from ID */
infosoftglobal.FusionChartsUtil.getChartObject = function(id)
{
  var chartRef=null;
  if (navigator.appName.indexOf("Microsoft Internet")==-1) {
    if (document.embeds && document.embeds[id])
      chartRef = document.embeds[id]; 
	else
	chartRef  = window.document[id];
  }
  else {
    chartRef = window[id];
  }
  if (!chartRef)
	chartRef  = document.getElementById(id);
  
  return chartRef;
}
/*
 Function to update chart's data at client side (FOR FusionCharts vFREE and 2.x
*/
infosoftglobal.FusionChartsUtil.updateChartXML = function(chartId, strXML){
	//Get reference to chart object				
	var chartObj = infosoftglobal.FusionChartsUtil.getChartObject(chartId);		
	//Set dataURL to null
	chartObj.SetVariable("_root.dataURL","");
	//Set the flag
	chartObj.SetVariable("_root.isNewData","1");
	//Set the actual data
	chartObj.SetVariable("_root.newData",strXML);
	//Go to the required frame
	chartObj.TGotoLabel("/", "JavaScriptHandler"); 
}


/* Aliases for easy usage */
var getChartFromId = infosoftglobal.FusionChartsUtil.getChartObject;
var updateChartXML = infosoftglobal.FusionChartsUtil.updateChartXML;
var FusionCharts = infosoftglobal.FusionCharts;