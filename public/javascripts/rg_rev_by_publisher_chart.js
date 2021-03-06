// Initialization
jQuery(document).ready(function() {

  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 

  // TODO: can we reuse top_video piechart options here ??
  var rev_piechart_options = {
    title: "Service Billing by Publisher: Last Month",
    cursor: {
      useAxesFormatters: true,
      showTooltip: true,
      followMouse: true,
      tooltipFormatString: "%s",
      // causes big ole bug in firefox if not false
      showTooltipUnitPosition: false
    },
    highlighter: {
      showMarker: false,
      showTooltip: false
    },
    series: [
      {
        renderer:$.jqplot.PieRenderer, 
        rendererOptions:{
          highlightMouseOver: true,
          showDataLabels: true,
          dataLabelFormatString: '%s',
          dataLabels: [],
          dataLabelPositionFactor: 0.75, 
          dataLabelCenterOn: true,
          dataLableThreshold: 0.1,
        }
      } 
    ],
    legend:{ 
      show: true,
      // draw legend before pie, sometimes needed to calc pie and legend placement
      // predraw: true, 
      // put the legend inside the grid containing the pie
      placement: 'inside',
      // upper right of legend aligns with upper right of grid containing pie
      location: 'ne',
      // need to set this so the size of the legend doesn't get to large
      rendererOptions: {
        numberRows: 7, // max number of rows in legend
        numberColumns: 1 // max number of columns in legeng
      },
      // hack to set the legend width, otherwise the legend is way to wide
      // just adds these styles to the legend table element
      marginLeft: ';width:30%;height:50%;overflow:false' 
    }
  };

  if (rev_by_publisher_data_points.length == 0 ) {
    // chart always wants a 2D array
    rev_by_publisher_data_points = [[]];
    rev_piechart_options.title = "No Service Billing for Publishers: Last Month";
  }


  var rev_by_publisher_chart = $.jqplot('rev_by_publisher_chart', [rev_by_publisher_data_points], rev_piechart_options);

  $('#rev_by_publisher_chart').data('current_chart', rev_by_publisher_chart);

  // for showing rev publishers on piechart mouse over
  $('#rev_by_publisher_chart').bind('jqplotDataMouseOver', 
                              function (ev, seriesIndex, pointIndex, data) {
                                var ttip = "<span >" + data[0] +", "+ data[1] + "<span>";
                                $('#rev_by_publisher_chart > .jqplot-cursor-tooltip').append(ttip).show();               
                              }
                             );

/*
  var options = {
    uri: rev_by_publisher_update_uri,
    chart: rev_by_publisher_chart,
    constrainDates: true,
    earliestDate: Date.parse('09/01/2010'),
    latestDate: new Date(),
    //onClose: RG.graph.daterange_piechart_update
    onChange: RG.graph.daterange_piechart_update
  };

  $('#rev_by_publisher_start_date_picker').daterangepicker(options);
  */  
});
