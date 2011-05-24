// Initialization
jQuery(document).ready(function() {
  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 
  var plot_options = $.extend({}, RG.graph.chart_options);
  plot_options.title = "Service Billing: Past 30 Days";
  plot_options.axes.xaxis.ticks = service_billing_xaxis_ticks;

  if (service_billing_points.length == 0 ) {
    // chart always wants a 2D array
    service_billing_points = [[]];
    plot_options.title = "No Service Billing: Past 30 Days";
  }

  var service_billing_chart = $.jqplot('service_billing_chart', [service_billing_points], plot_options);

//   var options = {
//     change_counter: 0,
//     update_uri: service_billing_update_uri,
//     chart: service_billing_chart,
//     constrainDates: true,
//     earliestDate: Date.parse('09/01/2010'),
//     latestDate: new Date(),
//     onChange: RG.graph.daterange_update
//   };

//   $('#service_billing_date_picker').daterangepicker(options);

});
