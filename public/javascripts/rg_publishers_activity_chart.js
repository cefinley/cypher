// Initialization
jQuery(document).ready(function() {
  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 

  var plot_options = $.extend({}, RG.graph.chart_options);
  plot_options.title = "Publisher Activity: Past 30 Days";
  plot_options.axes.xaxis.ticks = publishers_xaxis_ticks;
  plot_options.axes.yaxis.label = "Activity";
  plot_options.legend = {
    show: true,
    placement: 'outside',
    location: 'ne',
    marginLeft: ';width:10%;height:20%;overflow:false' 
  };
  plot_options.series = [
        {label: 'Pre-Rolls Present', lineWidth:1, markerOptions:{size: 7, style:'circle'}}, 
        {label: 'Overlays Present', lineWidth:1, markerOptions:{size: 7, style:'circle'}}, 
        {label: 'Streams', lineWidth:1, markerOptions:{size: 7, style:'circle'}} 
  ];
 plot_options.seriesColors = [ "#EAA228","#c5b47f","#4bb2c5" ];

  if (publishers_data_points.length == 0 ) {
    // chart always wants a 2D array
    publishers_data_points = [[]];
    plot_options.title = "No Publisher Streams: Past 30 Days";
  }

  var publishers_activity_chart = $.jqplot('publishers_activity_chart', publishers_data_points, plot_options);

  var options = {
    update_uri: publisher_update_uri,
    chart: publishers_activity_chart,
    constrainDates: true,
    earliestDate: Date.parse('09/01/2010'),
    latestDate: new Date(),
    onChange: RG.graph.daterange_update
  };

  $('#pub_start_date_picker').daterangepicker(options);

});
