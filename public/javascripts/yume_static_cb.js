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
