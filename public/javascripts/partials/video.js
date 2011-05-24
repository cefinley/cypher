jQuery(document).ready(function() {
	
	//  modal form for a staic player and playlist

	var amodal = $("#modal-embed-form").dialog({
		dialogClass: 'playlist_modal_form',
		bgiframe: true,
		autoOpen: false,
		height: 800,
		width: 1100,
		modal: true,
		buttons: {
		  OK: function() { $(this).dialog('close'); 
			}
	 	}
	});

	$('.embed_code_link').click(function() {
		$('#video_guid').val(this.id)
	  $('#modal-embed-form').dialog('open');
		return false
	});

	$('#video_player').change(function() {
		var uuid = $('#video_player').val()
		
		if (uuid == '') {return false}
		var guid = $('#video_guid').val()
		var url = '/single_video_player_xml/' + uuid + '/' + guid;

		$.get(url, "", function(response) { 
			$('#embed_code').html("")
			$('#embed_code').append(response);
			return false;
		}); 
	});
	
	// select widget for geo blocking
	$(".multiselect").multiselect({
		sortable: false,
		searchable: true,
		animated: 'fast',
		show: 'slideDown',
		hide: 'slideUp',
		msHeight: 165,
		msWidth: 435,
		dividerLocation: 0.5
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
			$("#video_ui_geo_block_input_false").attr("checked", "checked");
		};
		geo_selector()	
	};
	
	// update on change of radio button
	$('#video_ui_geo_block_input').click(function () {
		geo_selector()	
	});
	
	
	
});