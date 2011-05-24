
// Initialization
jQuery(document).ready(function() {
  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 

  // create the provider streams chart
  // NOTE: the 2nd argument, data_points is defined in the view template that
  // includes this file.
  var provider_streams_chart = $.jqplot('provider_streams_chart', [data_points], RG.graph.chart_options);

  // click handler to update provider streams chart
  // $update_link = $("#provider_streams_update");
  // $update_link.length > 0 ? $update_link.bind('click', {'chart': provider_streams_chart, 'uri': '/admin/provider_streams_update'}, RG.graph.update_chart ): alert("missing the update provider streams chart link") ;

  // Date Picker Options
  var datepicker_options = RG.graph.datepicker_options;
  // Date Picker on select handler
  datepicker_options.onSelect = RG.graph.update_chart_range;

  // set up params passed to the start date onSelect handler
  var $sdp = $('#start_date_picker');
  $sdp.data('current_chart', provider_streams_chart );
  $sdp.data('uri', '/admin/provider_streams_update');
  $sdp.data('other_date_picker', $('#end_date_picker'));
  // set the date picker options, includes the handler/callback
  $sdp.datepicker(datepicker_options);

  // change the Date Picker Options, buttonText, for the end date picker
  var end_date_options = $.extend({}, datepicker_options );
  end_date_options['buttonText'] = "End Date";
  // set up params passed to the end date handler and it's options
  // like start data hanlder but method chaining here
  $('#end_date_picker').data('current_chart', provider_streams_chart).data('uri', '/admin/provider_streams_update').data('other_date_picker', $sdp).datepicker(end_date_options);

});
