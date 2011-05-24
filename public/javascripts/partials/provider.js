jQuery(document).ready(function() {
	
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
			$("#provider_preference_attributes_black_list_selector_false").attr("checked", "checked");
		};
		black_list_selector()	
	};
	
	// update on change of radio button
	$('#provider_preference_attributes_black_list_selector_input').click(function () {
		black_list_selector()	
	});
	
	


});
