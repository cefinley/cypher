jQuery(document).ready(function() {
	
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
			$("#company_preference_attributes_geo_block_selector_false").attr("checked", "checked");
		};
		geo_selector()	
	};
	
	// update on change of radio button
	$('#company_preference_attributes_geo_block_selector_input').click(function () {
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
			$("#company_preference_attributes_black_list_selector_false").attr("checked", "checked");
		};
		black_list_selector()	
	};
	
	// update on change of radio button
	$('#company_preference_attributes_black_list_selector_input').click(function () {
		black_list_selector()	
	});
	
	


});
