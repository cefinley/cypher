// Initialization
jQuery(document).ready(function() {
  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 
  var plot_options = $.extend({}, RG.graph.chart_options);
  plot_options.title = "Provider Streams: Past 30 Days";
  plot_options.axes.xaxis.ticks = provider_xaxis_ticks;

  if (provider_data_points.length == 0 ) {
    // chart always wants a 2D array
    provider_data_points = [[]];
    plot_options.title = "No Provider Streams: Past 30 Days";
  }

  // create the provider streams chart
  // NOTE: the 2nd argument, provider_data_points is defined in the view template that
  // includes this file.
  var provider_streams_chart = $.jqplot('provider_streams_chart', [provider_data_points], plot_options);

  var options = {
    change_counter: 0,
    update_uri: provider_update_uri,
    chart: provider_streams_chart,
    constrainDates: true,
    earliestDate: Date.parse('09/01/2010'),
    latestDate: new Date(),
    onChange: RG.graph.daterange_update
  };

  $('#start_date_picker').daterangepicker(options);

});
