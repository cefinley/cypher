jQuery(document).ready(function() {

	//  modal form for Term of Service
	var amodal = $("#tos-form").dialog({
		dialogClass: 'registration_modal_form',
		bgiframe: true,
		autoOpen: false,
		height: 600,
		width: 700,
		modal: true,
		buttons: {
		  Cancel: function() { 
				$(this).dialog('close'); 
				$("#user_accepted_tos").attr('checked', false); 
				return false
				},
		  Accept: function() { 
				$("#user_accepted_tos").attr('checked', true); 
				$(this).dialog('close');
				return false;
			}
	 	}
	});
		
	$('#load-tos-form').click(function() {
	  $('#tos-form').dialog('open');
		return false;
	});
	
	//  modal form for Privacy
	var amodal = $("#privacy-form").dialog({
		dialogClass: 'registration_modal_form',
		bgiframe: true,
		autoOpen: false,
		height: 600,
		width: 700,
		modal: true,
		buttons: {
		  Cancel: function() { 
				$("#user_accepted_privacy").attr('checked', false); 
				$(this).dialog('close'); 
				return false
			},
		  Accept: function() { 
				$("#user_accepted_privacy").attr('checked', true); 
				$(this).dialog('close');
				return false;
			}
	 	}
	});
		
	$('#load-privacy-form').click(function() {
	  $('#privacy-form').dialog('open');
		return false;
	});
});