jQuery(document).ready(function() {
	
	// for the multi-select js widget
	
	$(".multiselect").multiselect({
		sortable: false,
		searchable: true,
		animated: 'fast',
		show: 'slideDown',
		hide: 'slideUp',
		dividerLocation: 0.5
		}
	);
	
	// // Convert netowrk_members to an array
	// $('#network_submit').click(function () {
	// 	$('#network_members').val($('#network_network_select').val().split(','))
	// });
	// 
	
});