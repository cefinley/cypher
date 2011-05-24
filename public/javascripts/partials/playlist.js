jQuery(document).ready(function() {
	
	// content selectors
	if ($('#provider_data').size()) {
		$.data(document.body, 'provider_data', $('#provider_data').metadata());
	};
	
	// set the value for the providers based on the radio selected 
	// Marketplace = 0, Network = network.providers, Select Providers = from selection list 
	function content_selector() {
		
		if ($(".content-selector :checked").val() == '0') {
			$(".ui-multiselect").hide();
			$(".provider_enums").val($.data(document.body, 'provider_data')['marketplace']);
			$("#playlist_provider_dynamic_search").val($.data(document.body, 'provider_data')['marketplace']);
				
		} else if ($(".content-selector :checked").val() == '1') {
			$(".ui-multiselect").hide();
			$(".provider_enums").val($.data(document.body, 'provider_data')['network']);
			$("#playlist_provider_dynamic_search").val($.data(document.body, 'provider_data')['network']);
				
		} else if ($(".content-selector :checked").val() == '2') {
			$(".ui-multiselect").hide();
			$(".provider_enums").val($.data(document.body, 'provider_data')['company']);
			$("#playlist_provider_dynamic_search").val($.data(document.body, 'provider_data')['company']);
				
		} else if ($(".content-selector :checked").val() == '3') {
			$(".ui-multiselect").show();
			$(".provider_enums").val($('.multiselect').val());
			$("#playlist_provider_dynamic_search").val($('.multiselect').val());
			
		} else {
			$(".ui-multiselect").hide();
		};
		
	};
	
	// load the defaults at page load
	if ($('.content-selector').size()){
		$(".multiselect").multiselect({
			sortable: false,
			searchable: true,
			animated: 'fast',
			show: 'slideDown',
			hide: 'slideUp',
			dividerLocation: 0.5
			}
		);
		$(".multiselect").hide();
		content_selector()	
	};
	
	// update when selected
	$('.content-selector').click(function () {
		content_selector()	
	});
	
	
	// functions for the playlist drag and drop
	
	var $gallery = $('#videos'), $playlist = $('#playlist');

	//let the #videos items be draggable
	
	$('#videos li').draggable({
		cancel: 'a.ui-icon',
		revert: 'invalid', 
		containment: $('#demo').length ? '#demo' : 'document', 
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
	
	

	// let the gallery be droppable as well, accepting items
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
		
	// Submit via Done (Playlists)
	$('#done-button').click(function() {
		updatePlaylistOrder();
	});
	
	// for plylist dynamic form values to be saved when the playlist is saved.
	function updateHiddenFields() {
		$('.search_context').val($('.dynamic_form_search_context').val());
		$('.index_enum').val($('.dynamic_form_index_enum').val());
		$('.search_order_enum').val($('.dynamic_form_search_order_enum').val());
		$('.result_set').val($('.dynamic_form_result_set').val());
		$('.publisher_id').val($(".content-selector :checked").val());
		
		if ($(".content-selector :checked").val() == '3') {
			$('.provider_enums').val($('.multiselect').val());		
			$("#playlist_provider_dynamic_search").val($('.multiselect').val());
		}
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
	
	
	
	// modal form for a playlist
	
	var amodal = $("#modal-form").dialog({
		dialogClass: 'playlist_modal_form',
		bgiframe: true,
		autoOpen: false,
		height: 600,
		width: 700,
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
		
});