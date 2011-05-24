// Add an auth token to ajax requests

jQuery(document).ajaxSend(function(event, request, settings) {
  if (typeof(AUTH_TOKEN) == "undefined") return;
  // settings.data is a serialized string like "foo=bar&baz=boink" (or null)
  settings.data = settings.data || "";
  settings.data += (settings.data ? "&" : "") + "authenticity_token=" + encodeURIComponent(AUTH_TOKEN);
});


// functions for putting players on a page
jQuery.metadata.setType('elem', 'script');

// jQuery.ajaxSetup({  
// 	'beforeSend': function (xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
// });

jQuery(document).ready(function() {
	// 
  // show the "Building Report" dialog
  $('.build_report_dialog').click(function() {
    $report_dialog.dialog('open');
  });

  
  // disable uuid field from being editable
  if($('.lock_from_edit').size()) {
    $('.lock_from_edit').attr("disabled", true); 
  }
  
  function skin_selector() {
    if ($(".skin-selector :checked").val() == 'true') {
      $(".skin-url").show();
      $(".skin-menu").hide();
    } else if ($(".skin-selector :checked").val() == 'false'){
      $(".skin-url").hide();
      $(".skin-menu").show();
      $(".skin-menu-input").val($(".skin-field").val());		
    } else {
      $(".skin-url").hide();
      $(".skin-menu").hide();			
    };
  };
  
  if ($('.skin-selector').size()){
    skin_selector()	
  };
  
  $('.skin-selector').click(function () {
    skin_selector()	
  });
  
  // for player ads
  function ad_show_hide(value) {
    if ($("#jw_player_player_rg_ui__enable_" + value + "_input :checked").val() == 'true' || $("#player_theme_player_rg_ui__enable_" + value + "_input :checked").val() == 'true'){
      $("." + value).show();
    } else {
      $("." + value).hide();
    };
  };
  
  function ad_show_hide_all(){
    $.each(['preroll','midroll','overlay','postroll'], function(index, value) { 
      ad_show_hide(value)
    });
  };
  
  // when the page loads, show ad options if ads radio is selected
  if ($('.ad-selector').size()){
    ad_show_hide_all()
  };
  
  $('.ad-selector').click(function () {
    var value = this.id.split('_')[7]
    ad_show_hide(value)
  });
  
  // 	Used for uploading videos to tell when the form should be closed
  if ($('#done').size()) {
    $('#done').click(function () {
      $('#done_hidden_flag').val(1)
    });
  };	
  
  
  
  
  // get player values from html script application/json tags
  
  if ($('#rg_player_required').size()) {
    $.data(document.body, 'player_required', $('#rg_player_required').metadata());
    $.data(document.body, 'player_params', $('#rg_player_params').metadata());
    $.data(document.body, 'player_flashvars', $('#rg_player_flashvars').metadata());
    $.data(document.body, 'player_attributes', $('#rg_player_attributes').metadata());
    if ($('#rg_embed_code').size()) {
      $.data(document.body, 'player_embed_code', $('#rg_embed_code').metadata());
    };

    if ($('#rg_playlist_url').size()) {
      $.data(document.body, 'playlist_url', $('#rg_playlist_url').metadata());
    };
    if ($('#rg_playlist_uuids').size()) {
      $.data(document.body, 'playlist_uuids', $('#rg_playlist_uuids').metadata());
    };
    if ($('#rg_companion_ad').size()) {
      $.data(document.body, 'rg_companion_ad', $('#rg_companion_ad').metadata());
    };
    
  };	
  // 
  // reload player when player_required fields change
  
  $.update_player = function() {
    
    var p_required 			= $.data(document.body, 'player_required');
    var p_params   			= $.data(document.body, 'player_params');
    var p_flashvars 		= $.data(document.body, 'player_flashvars');
    var p_attributes		= $.data(document.body, 'player_attributes');
    var height 					= parseInt($.data(document.body, 'player_required')['height'])
    var width  					= parseInt($.data(document.body, 'player_required')['width'])
    var playlist 				= $.data(document.body, 'player_flashvars')['playlist']
    var playlist_size		= parseInt($.data(document.body, 'player_flashvars')['playlistsize'])
    var title_size			= parseInt($.data(document.body, 'player_flashvars')['rg_vidtitle.size'])
    var display_title		= $.data(document.body, 'player_flashvars')['rg_vidtitle.includevideotitle']
    
    // SYNTAX:  swfobject.embedSWF(swfUrl, id, width, height, version, expressInstallSwfurl, flashvars, params, attributes, callbackFn) 
    
    // remove old player
    swfobject.removeSWF(p_required.id); 
    $('.flash_player').append('<div id="' + $.data(document.body, 'player_required')['id'] + '"></div>');
    
    
    // calculate real estate of the player
    actual_width  = parseInt($.data(document.body, 'player_flashvars')['video_width']);
    actual_height = parseInt($.data(document.body, 'player_flashvars')['video_height']);
    
    if (display_title == 'true') {
      actual_height += 30;
      $.data(document.body, 'player_flashvars')['rg_vidtitle.size'] = '30';
      $.data(document.body, 'player_flashvars')['rg_vidtitle.videotitleheight'] = '30';
      $("#title_height").val(30);
      $("#title_size").val(30);
    }
    else {
      $.data(document.body, 'player_flashvars')['rg_vidtitle.size'] = '0';			
      $.data(document.body, 'player_flashvars')['rg_vidtitle.videotitleheight'] = '0';
      $("#title_height").val(0);
      $("#title_size").val(0);
    }
    if (playlist == 'bottom') {
      actual_height += playlist_size;
    }
    if (playlist == 'right') {
      actual_width += playlist_size;
    }		
    
    // sharing plugin -- turn off the sharing link
    $.data(document.body, 'player_flashvars')['sharing.link'] 	= ""
    
    // Must set these values for IE bug
    $.data(document.body, 'player_flashvars')['rg_ads.size.height'] 	= actual_height
    $.data(document.body, 'player_flashvars')['rg_ads.size.width'] 		= actual_width
    $.data(document.body, 'player_flashvars')['rg_ads.size.playlist'] = playlist_size
    

    // insert new player with page changes
    swfobject.embedSWF(p_required.swf, p_required.id, actual_width, actual_height, p_required.version, p_required.expressInstallSwfurl, p_flashvars, p_params, p_attributes );
    
    // update the real estate of the player on the page
    $('.height').text(actual_height);
    $('.width').text(actual_width);
    
    // clear the embed codes since they are no longer valid until the changes are saved.
    var embed_code_text = 'A new embed code with be generated when the player is saved.'
    $('.embed_code').text(embed_code_text);
    $('.js_embed_code').text(embed_code_text);
  };
  
  // update the player skin if a network skin is set
  if ($('#rg_network_skin').size()) {
    $.data(document.body, 'rg_network_skin', $('#rg_network_skin').metadata());
    $.data(document.body, 'player_flashvars')['skin'] = $.data(document.body, 'rg_network_skin')['network_skin']
    $('#skin_choices').hide();
    // $.update_player();
  };
  
  
  // $('.player_required').change(function() {
  // 	$.data(document.body, 'player_required')[this.name.split('[')[1].split(']')[0].replace('__','.').replace('player_','')] = this.value;    
  // 	$.update_player() ;
  // });
  
  $('.player_flashvars').change(function() {

    $.data(document.body, 'player_flashvars')[this.name.split('[')[1].split(']')[0].replace('__','.').replace('player_','')] = this.value ;
    
    if ($(this).is('.color')) {
      $(this).css('backgroundColor', '#' + this.value);
      $(this).val(this.value.toUpperCase())
    };
    
    if ($(this).is('#volume')) { 
      $("#volume_slider").slider({value: this.value});
    };
    
    if ($(this).is('.sharing-2')) { 
      if (this.value == 'true') {
	$.data(document.body, 'player_flashvars')['sharing.code'] = $.data(document.body, 'player_embed_code')['code']
      } else {
	$.data(document.body, 'player_flashvars')['sharing.code'] = ''				
      }
    };
    
    if ($(this).is('.skins')) { 
      if ($(".skin-selector :checked").val() == 'true') {
	$(".skin-url").show();
	$(".skin-menu").hide();
	$(".skin-field").val($(".skin-url-input").val());
      } else {
	$(".skin-url").hide();
	$(".skin-menu").show();
	$(".skin-field").val($(".skin-menu-input").val());		
      };
      $.data(document.body, 'player_flashvars')['skin'] = $(".skin-field").val()
    };
    
    $.update_player() ;
  });
  
  $('#playlist_id').change(function() {
    var playlistfile = $.data(document.body, 'player_flashvars')['playlistfile'];
    
    if (playlistfile == '') {
      var base_url = $.data(document.body, 'playlist_url')['base_url'];
      var uuid     = $.data(document.body, 'playlist_uuids')[this.value];
      $.data(document.body, 'player_flashvars')['playlistfile'] = base_url + '/' + uuid;
    } else {
      var url = playlistfile.split('/');
      url[url.length -1] =  $.data(document.body, 'playlist_uuids')[this.value];
      $.data(document.body, 'player_flashvars')['playlistfile'] = url.join('/');
    };
    $.update_player() ;			
  });
  
  
  
  if ($('#volume_slider').size()) {
    $("#volume_slider").slider({
      range: "min",
      value: $.data(document.body, 'player_flashvars')['volume'],
      min: 1,
      max: 100,
      slide: function(event, ui) {
	$("#volume").val(ui.value);
	$.data(document.body, 'player_flashvars')['volume'] = ui.value;
      },
      stop: function(event, ui) {
	$("#volume").val(ui.value);
	$.data(document.body, 'player_flashvars')['volume'] = ui.value;
	$.update_player() ;
      }
    });
  };	
  
  $('.player_companion_ad').change(function() {
    $.data(document.body, 'rg_companion_ad')[this.id.split('_')[this.id.split('_').length - 1]] = this.value ;
    $.update_companion_ad_embed_code()
  });
  
  
  $.update_companion_ad_embed_code = function() {
    
    var companion_ad 			= $.data(document.body, 'rg_companion_ad');
    var line0 = "<script src=\"http://mediacast.realgravity.com/javascripts/rg_yume_cb.js\"></script><script src=\"http://mediacast.realgravity.com/javascripts/yume_static_cb.js\"></script>"
    var line1	="<div id='cb_medrect1_div' style='background-color: \#$backcolor; text-align: center; height: $heightpx; width: $widthpx;'>"
    var line2 = "<iframe width='$widthpx' height='$heightpx' frameborder='0' scrolling='no' allowtransparency='true' leftmargin='0' topmargin='0' marginwidth='0' marginheight='0' id='cb_medrect1_frame' name='cb_medrect1_frame'></iframe>"
    var line3 = "<script type='text/javascript'>yumeAdPlayer();</script></div>"
    
    var embed_code1				= line1.replace('$backcolor',companion_ad['color']).replace('$height',companion_ad['height']).replace('$width',companion_ad['width'])
    var embed_code2				= line2.replace('$backcolor',companion_ad['color']).replace('$height',companion_ad['height']).replace('$width',companion_ad['width'])

    $('#replace_embed_code').html("");
    $('#replace_embed_code').text(line0 + embed_code1 + embed_code2 +  line3);
  };
  
  
  
  // Player Theme controls

  // hide the select theme if no themes have been saved
  if ($('.theme_apply').children('option').size() == 1) {
    $('#apply_theme_select').hide();
  };
  
  // save the player theme via ajax
  $('.theme_save').click(function() {
    
    if ($('#jw_player_theme_name').fieldValue() == "") {
      alert("Theme Name can't be blank.");
      return false;
    }
    
    var queryString = $('.theme_values').fieldSerialize();
    var company_id  = $('#company_id').fieldValue()[0];
    var player_id   = $('#player_id').fieldValue()[0];
    var url = '/partner/company/' + company_id +'/players/' + player_id + '/save_theme';
    
    
    $.post(url, queryString, function(response) { 
      var callback_result = $.parseJSON(response);
      // check to see if the theme is in the theme select field
      var exists = false;
      $('.theme_apply option').each(function(){
	if (this.value == callback_result['player_theme']['id']) {
	  exists = true;
	}
      });
      // if not add to the apply theme select field
      if (!exists) {	$('.theme_apply').append(
	$("<option></option>").attr("value",callback_result['player_theme']['id']
				   ).text(callback_result['player_theme']['theme_name']));
		   }
      $('#apply_theme_select').show();
    }, "script");
    $('#accordion_6').accordion({active: false})
    
    return false;
  });
  
  // Updates the player fields with a saved theme
  (function($) {
    $.update_form_field = function(fields_hash) {
      var theme_params = $.parseJSON(fields_hash['player_theme']['theme_params']);			
      $.each(theme_params, function(value) {
	$('#jw_player_' + value).val(theme_params[value])
	$('#jw_player_' + value + '_' + theme_params[value]).attr('checked', true);

	if (value == 'title_subject_color' ) {
	  $.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlehtml'] = "<body><span class='vidheader'><font face='Arial Black' color='#" + theme_params[value] + "'>$vidheader</font><font face='Arial'>$vidbody</font></span></body>"
	} else if (value == 'title_body_color' ) {
	  $.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlecss'] =  "body {font-size:12px; background-color:#000000;} .vidheader {text-indent: 10px; color:#" + theme_params[value] + ";font-size:14px;}"
	}
	else {
	  $.data(document.body, 'player_flashvars')[value.replace('player_','').replace('__','.')] = theme_params[value] ;
	  if (value == 'player_volume') { 
	    $("#volume_slider").slider({value: theme_params[value]});
	    $('#volume').val(theme_params[value])
	  };
	};
      });
      skin_selector()
      ad_show_hide_all()		
      $.update_colors()
      $.update_player()		
    };
  })(jQuery);
  
  // apply a saved theme via ajax to a player
  $('.theme_apply').click(function() {
    if ($('#jw_player_theme_select').fieldValue() == "") {
      return false;
    }
    $.data(document.body, 'theme_loading', true);
    var theme_id = $('.theme_apply').val()
    var company_id = $('#company_id').fieldValue()[0];
    var player_id   = $('#player_id').fieldValue()[0];
    var url = '/partner/company/' + company_id +'/players/' + player_id + '/apply_theme';
    $.getJSON(url, {id: theme_id}, $.update_form_field);
    $.update_colors()
    $('#accordion_5').accordion({active: false})
    $.data(document.body, 'theme_loading', false);
    return false;
  });
  
  // submit a form flag for completing a upload video session via ajax
  
  
  // traps the return key and tabs to the next field
  if ($('#players').size()) {
    $("input").keypress(function (evt) {
      //Deterime where our character code is coming from within the event
      var charCode = evt.charCode || evt.keyCode;
      if (charCode  == 13) { //Enter key's keycode
	return false;
      }
    });
  }
  
  // function to dynamically update all color fields 
  
  $.update_colors = function() {
    $('.color').each(function() {
      $(this).css('backgroundColor', '#' + this.value);
    })
      }

  // Colorpicker
  if ($('.color').size()) {
    $.update_colors()
  }
  
  $('.color').ColorPicker({		
    onBeforeShow: function () {	
      $(this).ColorPickerSetColor(this.value);
      $.data(document.body, 'color_field', this);
    },
    onShow: function (colpkr) {
      $(colpkr).fadeIn(500);
      return false;
    },
    onHide: function (colpkr) {
      $(colpkr).fadeOut(500);
      // update the flashvar rg_vidtitle.videotitlehtml if the title color was changed via the ui
      
      if ($.data(document.body, 'color_field').id.split('_')[3] == 'subject') {
	$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlehtml'] = "<body><span class='vidheader'><font face='Arial Black' color='#" + $.data(document.body, 'color_field').value + "'>$vidheader</font><font face='Arial Black' color='#000000'>-</font><font face='Arial'>$vidbody</font></span></body>"
	$.update_player();
	
	// update the flashvar rg_vidtitle.videotitlecss if the body color was changed via the ui				
      } else if ($.data(document.body, 'color_field').id.split('_')[3] == 'body') {
	$.data(document.body, 'player_flashvars')['rg_vidtitle.videotitlecss'] =  "body {font-size:12px; background-color:#000000;} .vidheader {text-indent: 10px; color:#" + $.data(document.body, 'color_field').value + ";font-size:14px;}"
	$.update_player();
	
      } else if ($.data(document.body, 'color_field').id.split('__')[1] == 'companion_ad_backcolor') {
	$.data(document.body, 'rg_companion_ad')['color'] =  $.data(document.body, 'color_field').value
	$.update_companion_ad_embed_code();
	
	// update player colors via the ui
      } else {
	$.data(document.body, 'player_flashvars')[$.data(document.body, 'color_field').id.split('_')[3]] = $.data(document.body, 'color_field').value ;				
	$.update_player();
      }
      return false;
    },
    onChange: function (hsb, hex, rgb) {
      $($.data(document.body, 'color_field')).css('backgroundColor', '#' + hex);
      $($.data(document.body, 'color_field')).val(hex.toUpperCase())
    }
  })
  
  
  // controls the accordian edit fields
  
  if ($('#accordion_0').size()) {
    $("#accordion_0").accordion({
      active: 0,
      collapsible: true,
      autoHeight: false
    });
  };

  if ($('#accordion_1').size()) {
    $("#accordion_1").accordion({
      active: false,
      collapsible: true,
      autoHeight: false,
			change: function(event, ui) { 
				$('#copy2clipboard-companion').zclip({
					path:'/flash/ZeroClipboard.swf',
					copy:$('p#companion_ad_embed_code').text(),
					afterCopy:function(){
						$('a#copy2clipboard-companion').css('background','green');
					}
				});
			 }
    });
  };
  
  if ($('#accordion_2').size()) {
    $("#accordion_2").accordion({
      active: false,
      collapsible: true,
      autoHeight: false
    });
  };
  
  if ($('#accordion_3').size()) {
    $("#accordion_3").accordion({
      collapsible: true,
      active: false,
      autoHeight: false
    });
  };
  
  if ($('#accordion_4').size()) {
    $("#accordion_4").accordion({
      collapsible: true,
      active: false,
      autoHeight: false
    });
  };
  
  if ($('#accordion_5').size()) {
    $("#accordion_5").accordion({
      collapsible: true,
      active: false,
      autoHeight: false
    });
  };
  
  if ($('#accordion_6').size()) {
    $("#accordion_6").accordion({
      collapsible: true,
      active: false,
      autoHeight: false
    });
  };
  


  // Switch the name of the menu pointer to the correct page based on the hidden DIV #menu_selection

  if ($('#menu_selection').size()) {
    var menuSelect = $('#menu_selection').text().trim() + '_menu';
    $('li.' + menuSelect).addClass('active');
  };
  
  // Show/Hide the date fields based on the selection of the report type

  if ($('#date_choice').size()) {
    $('#date_2').hide();
    $('#date_3').hide();
    $("#date_choice").change(function() {
      for (var i =1; i < 4; i++) {
	if ( $('#date_choice').val() == i ) {
	  $('#date_' + i).show();
	}
	else {
	  $('#date_' + i).hide();
	};
      };
    });
  };

  // Show/Hide the report details based on the check boxes in the summary view

  if ($('#rg_report').size()) {
    // check all the checkboxes by default
    $('#rg_report :checkbox').removeAttr('checked');
    
    var check_boxes = $('#rg_report :checkbox');
    for (var i =0; i < check_boxes.length; i++) {
      $("#report_" + check_boxes[i].id).hide()
    };
  };
  
  // Toggle the detail for a report summary item when the check box is clicked
  $(':checkbox').click(function() {
    if ($(this).is(':checked')) {
      $("#report_" + this.id).show();
    }
    else {
      $("#report_" + this.id).hide();
    }
  });

  // Hide flash message after 2.5 seconds
  
  if ($('#flash_notice').size()) {
    $('#flash_notice').delay(2500).hide('slow')
  };
  
  // Check and uncheck all all videos on a upload video form

  $('#check-all').click(function() {
    var check_boxes = $(':checkbox');
    if ($(this).is(':checked')) { 
      checked = true;
    }
    else { 
      checked = false;
    };
    
    for (var i =0; i < check_boxes.length; i++) {
      check_boxes[i].checked = checked;
    };
  });

  $('#check-partners').click(function() {
    var check_boxes = $(':checkbox');
    if ($(this).is(':checked')) { 
      checked1 = true;
    }
    else { 
      checked1 = false;
    };
    
    for (var i =0; i < check_boxes.length; i++) {
      if (check_boxes[i].id != 'check-all') {
	if ($.inArray(check_boxes[i].id.split('_')[check_boxes[i].id.split('_').length -1], ['12', '13', '14', '1']) == -1 ) {
	  check_boxes[i].checked = checked1;
	};
      };
    };
  });
  

  var $video_dialog = $('<div class="dialog"></div>')
    .html('<span class="rotate_logo">Uploading Video File...</span>')
    .dialog({
      dialogClass: 'spinning_logo',
      autoOpen: false,
      height: 140,
      modal: true,
      draggable: false,
      closeOnEscape: false,
      resizable: false
    });

  var $report_dialog = $('<div class="dialog"></div>')
    .html('<span class="rotate_logo">Building Report ...</span>')
    .dialog({
      dialogClass: 'spinning_logo',
      autoOpen: false,
      height: 140,
      modal: true,
      draggable: false,
      closeOnEscape: false,
      resizable: false
    });
  

  
  // Find ALL <form> tags and disable on submit
  // Display modal box when generating reports or uploading videos
  if ($('#report_generation_page').size()) {
    $('form').validate({
      submitHandler: function(form){ 
        $('.lock_from_edit').removeAttr("disabled"); 
        $report_dialog.dialog('open'); 
        form.submit(); 
      }
    });
  };
    
  
  // Find ALL <form> tags and disable on submit
  // Display modal box when generating reports or uploading videos
  if ($('#video_upload_page').size()) {
    $('form').validate({
      submitHandler: function(form){
        $('.lock_from_edit').removeAttr("disabled"); 
        $video_dialog.dialog('open');
        form.submit();
      }
    });
  };

  // $('form').validate({
  //   submitHandler: function(form){
  //     $('.lock_from_edit').removeAttr("disabled"); 
  //     if ($('#video_upload_page').size()) {
  //       $video_dialog.dialog('open');
  //     };
  //     if ($('#report_generation_page').size()) {
  //       $report_dialog.dialog('open');
  //     };
  //     form.submit();
  //   }
  // });
  // 
  // Javascript that came with the template
  // *** Not sure if it works with the restructuring of the template ***
  // Search input text handling on focus
  var $searchq = $("#search-q").attr("value");
  $('#search-q.text').css('color', '#999');
  $('#search-q').focus(function(){
    if ( $(this).attr('value') == $searchq) {
      $(this).css('color', '#555');
      $(this).attr('value', '');
    }
  });
  $('#search-q').blur(function(){
    if ( $(this).attr('value') == '' ) {
      $(this).attr('value', $searchq);
      $(this).css('color', '#999');
    }
  });
  // Switch categories
  $('#h-wrap').hover(function(){
    $(this).toggleClass('active');
    $("#h-wrap ul").css('display', 'block');
  }, function(){
    $(this).toggleClass('active');
    $("#h-wrap ul").css('display', 'none');
  });
  
  // Handling with tables (adding first and last classes for borders and adding alternate bgs)
  $('tbody tr:even').addClass('even');
  $('table.grid tbody tr:last-child').addClass('last');
  $('tr th:first-child, tr td:first-child').addClass('first');
  $('tr th:last-child, tr td:last-child').addClass('last');
  $('form.fields fieldset:last-child').addClass('last');
  
  // Handling with lists (alternate bgs)
  $('ul.simple li:even').addClass('even');
  
  // Handling with grid views (adding first and last classes for borders and adding alternate bgs)
  $('.grid .line:even').addClass('even');
  $('.grid .line:first-child').addClass('firstline');
  $('.grid .line:last-child').addClass('lastline');
  
  // Tabs switching
  // $('#box1 .content#box1-grid').hide(); // hide content related to inactive tab by default
  // $('#box1 .header ul a').click(function(){
  // 	$('#box1 .header ul a').removeClass('active');
  // 	$(this).addClass('active'); // make clicked tab active
  // 	$('#box1 .content').hide(); // hide all content
  // 	$('#box1').find('#' + $(this).attr('rel')).show(); // and show content related to clicked tab
  // 	return false;
  // });
  
});

// alert($('#date_choice').val())

//totalsReport plugin
//two modes, controls one, controls subheads
(function(){
var toggleState = function($thead){
  var $next = $thead.next(),
    nonsubheadreached = false;
  $thead.toggleClass('child-hidden');
  if ($thead.hasClass('controls-subheads')) {
    do {
      if ($next[0].tagName === 'THEAD') {
        if ($next.hasClass('subhead')) {
          if ($thead.hasClass('child-hidden') &&
                !$next.hasClass('child-hidden')) {
            $next.find('a.details').click();
          }
          $next.toggleClass('this-hidden');
        } else {
          nonsubheadreached = true;
        }
      }
      $next = $next.next();
    } while (!nonsubheadreached && $next.length);
  } else {
    $next.toggleClass('this-hidden');
    if ($next.hasClass('this-hidden')) {
      console.log('hiding', $next);
    }
  }
};
window.jQuery.fn.totalsReport = function(){
  this.each(function(){
    var $this = $(this),
      providers = [],
      $theads = $this.children('thead.details-head'),
      linktdSelector = 'td:first';
    
    $theads.each(function(){
      toggleState($(this));
    });
    
    $theads.find('td.first')
      .prepend('<a href="#" class="details">&nbsp;</a>')
      .children('a')
      .click(function(ev){
        ev.preventDefault();
        var $thead = $(ev.target).closest('thead');
        console.log('click', $thead);
        toggleState($thead);
      });
  });
};
}());

$(function(){
  $('table.report_list').totalsReport();
  $('#report-form input.datepicker').datepicker({
    dateFormat: 'yy-mm-dd'
  });
});
