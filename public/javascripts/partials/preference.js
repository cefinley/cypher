// javascript for the Preferences

jQuery(document).ready(function() {
	
	// Network Preferences
		
	// set the value for the providers based on the radio selected 
	// Marketplace = 0, Network = network.providers, Select Providers = from selection list 
	function content_selector() {
		
		if ($(".content-selector :checked").val() == '0') {
			$(".provider-selection-box").hide();
			// $("#preference_ui_provider_selected").val($.data(document.body, 'provider_data')['marketplace']);
				
		} else if ($(".content-selector :checked").val() == '1') {
			$(".provider-selection-box").hide();
			// $("#preference_ui_provider_selected").val($.data(document.body, 'provider_data')['network']);
								
		} else if ($(".content-selector :checked").val() == '2') {
			$(".provider-selection-box").show();
			// $("#preference_ui_provider_selected").val($('.multiselect').val());
			
		} else {
			$(".provider-selection-box").hide();
		};
		
	};
	
	// load the defaults at page load
	if ($('.content-selector').size()){
		$(".provider-multiselect").multiselect({
			sortable: false,
			searchable: true,
			animated: 'fast',
			show: 'slideDown',
			hide: 'slideUp',
			dividerLocation: 0.51
			}
		);
		$(".provider-multiselect").hide();
		if ($(".content-selector :checked").length == 0){
			$("#preference_syndication_0").attr("checked", "checked");
		};
		content_selector()	
	};
	
	// update when selected
	$('.content-selector').click(function () {
		content_selector()	
	});

	$('a.action').click(function () {
		$("#preference_ui_provider_selected").val($('.multiselect').val());
	});
			
	// custom skin selectors
	
	function skin_selector() {
		if ($(".skin-selector :checked").val() == '1') {
			$(".skin-url").show();
			$(".skin-menu").hide();
			$('.plugin-selector').show();		
		} else if ($(".skin-selector :checked").val() == '2'){
			$(".skin-url").hide();
			$(".skin-menu").show();
		 	$(".skin-menu-input").val($(".skin-field").val());		
			$('.plugin-selector').show();		
		} else {
			$(".skin-url").hide();
			$(".skin-menu").hide();	
			$('.plugin-selector').hide();	
			$("#preference_rg_iconbutton__enable_false").attr("checked", "checked");	
			plugin_selector()
		};
	};
	
	if ($('.skin-selector').size()){
		if ($(".skin-selector :checked").length == 0){
			$("#preference_skin_selector_0").attr("checked", "checked");
		};
		skin_selector()	
	};
	
	$('.skin-selector').click(function () {
		skin_selector()	
	});
	
	// custom plugin selectors
	
	function plugin_selector() {
		
		if ($(".plugin-selector :checked").val() == "true") {
			$(".plugin-menu").show();
		} else {
			$(".plugin-menu").hide();
		};
	};
	
	if ($('.plugin-selector').size()){
		if ($(".plugin-selector :checked").length == 0){
			$("#preference_rg_iconbutton__enable_false").attr("checked", "checked");
			$("#preference_rg_iconbutton__skincolor_false").attr("checked", "checked");
		};
		plugin_selector()	
	};
	
	$('.plugin-selector').click(function () {
		plugin_selector()	
	});
	
	
	// select widget for geo blocking
	$(".geo_multiselect").multiselect({
		sortable: false,
		searchable: true,
		animated: 'fast',
		show: 'slideDown',
		hide: 'slideUp',
		msHeight: 165,
		msWidth: 435,
		dividerLocation: 0.55
		}
	);
	
	// geo blocking selector
	function geo_selector() {
		
		if ($(".geo-selector :checked").val() == "true") {
			$(".country-selection-box").show();
		} else {
			$(".country-selection-box").hide();
		};
	};
	
	// set default value to no
	if ($('.geo-selector').size()){
		if ($(".geo-selector :checked").length == 0){
			$("#preference_geo_block_selector_false").attr("checked", "checked");
		};
		geo_selector()	
	};
	
	// update on change of radio button
	$('#preference_geo_block_selector_input').click(function () {
		geo_selector()	
	});
	
	// select widget for black list providers
	$(".black-list-multiselect").multiselect({
		sortable: false,
		searchable: true,
		animated: 'fast',
		show: 'slideDown',
		hide: 'slideUp',
		msHeight: 165,
		msWidth: 435,
		dividerLocation: 0.55
		}
	);
	
	 // black list selector
	function black_list_selector() {
		
		if ($(".black-list-selector :checked").val() == "true") {
			$(".black-list-selection-box").show();
		} else {
			$(".black-list-selection-box").hide();
		};
	};
	
	// set default value to no
	if ($('.black-list-selector').size()){
		if ($(".black-list-selector :checked").length == 0){
			$("#preference_black_list_selector_false").attr("checked", "checked");
		};
		black_list_selector()	
	};
	
	// update on change of radio button
	$('#preference_black_list_selector_input').click(function () {
		black_list_selector()	
	});
	
	
	
});