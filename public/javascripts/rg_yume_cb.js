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
