jQuery(document).ready(function() {

	// Show/Hide the contract associations based on the selection of the contract level
	
	if ($('#contract_select').size()) {
		$('#select_2').hide();
		$('#select_3').hide();
		$('#select_4').hide();
		$("#contract_select").change(function() {
			for (var i =1; i < 5; i++) {
				if ( $('#contract_select').val() == i ) {
					$('#select_' + i).show();
				}
				else {
					$('#select_' + i).hide();
				};
			};
		});
	};
	
	
	$('form a.add_child').live('click', function() {
    // Setup
    var assoc   = $(this).attr('data-association');           // Name of child
    var content = $('#' + assoc + '_fields_template').html(); // Fields template
    // Make the context correct by replacing new_<parents> with the generated ID
    // of each of the parent objects
    var context = ($(this).parents('.fields').children('input:first').attr('name') || '').replace(new RegExp('\[[a-z]+\]$'), '');
    
    // context will be something like this for a brand new form:
    // project[tasks_attributes][1255929127459][assignments_attributes][1255929128105]
    // or for an edit form:
    // project[tasks_attributes][0][assignments_attributes][1]
    if(context) {
      var parent_names = context.match(/[a-z]+_attributes/g) || []
      var parent_ids   = context.match(/[0-9]+/g)
      
      for(i = 0; i < parent_names.length; i++) {
        if(parent_ids[i]) {
          content = content.replace(
            new RegExp('(\\[' + parent_names[i] + '\\])\\[.+?\\]', 'g'),
            '$1[' + parent_ids[i] + ']'
          )
        }
      }
    }
    
    // Make a unique ID for the new child 
    var regexp  = new RegExp('new_' + assoc, 'g');
    var new_id  = new Date().getTime();
    content     = content.replace(regexp, new_id)
        
    $(this).parent().after(content);
    return false;
  });

  $('form a.remove_child').live('click', function() {
    var hidden_field = $(this).prev('input[type=hidden]')[0];
    if(hidden_field) {
      hidden_field.value = '1';
    }
    $(this).parents('.fields').hide();
    return false;
  });

	// selected lists for networks
	
	// update network selected list
	function updateNetworkList() {
		var order_list = new Array;
		$.each ($('ul.select-list-parent > li > .select-list-content > .select-list-id'), function(index, value) {
			if ($.trim($(this).text()).length > 0) {
				order_list[index] = $.trim($(this).text())
			}
		});
		$('.network_members').val(order_list.join(','))
	};
	
	function moveToNetwork(html) {
			$(html).detach();
			$(html).find( "a.move_to_network" ).removeClass('move_to_network ui-icon-circle-arrow-e').addClass('remove_from_network ui-icon-circle-close');
			$(html).removeClass('to_selected').addClass('remove_selected');
			$(html).insertAfter('ul.select-list-parent li:last');
				
			updateNetworkList();
		return false;		
	};
	
	function moveFromNetwork(html){
		$(html).detach();
		$(html).find( "a.remove_from_network" ).removeClass('remove_from_network ui-icon-circle-close').addClass('move_to_network ui-icon-circle-arrow-e');			
		$(html).removeClass('remove_selected').addClass('to_selected');
		$(html).insertAfter('#items_to_select ul li:last');

		updateNetworkList();
		return false;
	};
	
	
	// moves a company to the network members list
	if($('.move_to_network').size()) {
		$('.move_to_network').click(function() {
			var li_to_move = $(this).parent().parent();
			
			// original click handlers are attached to the link so test for which side of the list the li is on
			if($(li_to_move).find(".move_to_network").size()) {
				moveToNetwork(li_to_move)				
			} else {
				moveFromNetwork(li_to_move);
			}
			return false;
		});
	};
	
	// moves a network member to the end of the companies list
	if($('.remove_from_network').size()) {
		$('.remove_from_network').click(function() {
			var li_to_move = $(this).parent().parent();
			
			// original click handlers are attached to the link so test for which side of the list the li is on
			if($(li_to_move).find(".move_to_network").size()) {
				moveToNetwork(li_to_move)				
			} else {
				moveFromNetwork(li_to_move);
			}
			return false;
		});
	};
  			
});


