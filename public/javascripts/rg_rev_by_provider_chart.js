// Initialization
jQuery(document).ready(function() {

  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 

  // TODO: can we reuse top_video piechart options here ??
  var rev_piechart_options = {
    title: "Revenue by Provider: Past 30 Days",
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
  // debugging stuff    
  //var rev_by_provider_data_points = [["Lorem ipsum dolor sit amet",33.03], ["consectetur adipisicing elit,",66.0],[" sed do eiusmod tempor ",100.0], ["incididunt ut labore et dolore magna aliqua.",33.0], ["Ut",66.0], ["enimad",133.00], ["Ut",44.0], ["enimad",55.7], [" minim veniam,",111.0], [ "quis",0.33] ];

  if (rev_by_provider_data_points.length == 0 ) {
    // chart always wants a 2D array
    rev_by_provider_data_points = [[]];
    rev_piechart_options.title = "No Videos for Providers: Past 30 Days";
  }


  var rev_by_provider_chart = $.jqplot('rev_by_provider_chart', [rev_by_provider_data_points], rev_piechart_options);

  $('#rev_by_provider_chart').data('current_chart', rev_by_provider_chart);

  // for showing rev providers on piechart mouse over
  $('#rev_by_provider_chart').bind('jqplotDataMouseOver', 
                              function (ev, seriesIndex, pointIndex, data) {
                                var ttip = "<span >" + data[0] +", "+ data[1] + "K <span>";
                                $('#rev_by_provider_chart > .jqplot-cursor-tooltip').append(ttip).show();               
                              }
                             );

/*
  var options = {
    uri: rev_by_provider_update_uri,
    chart: rev_by_provider_chart,
    constrainDates: true,
    earliestDate: Date.parse('09/01/2010'),
    latestDate: new Date(),
    //onClose: RG.graph.daterange_piechart_update
    onChange: RG.graph.daterange_piechart_update
  };

  $('#rev_by_provider_start_date_picker').daterangepicker(options);
  */  
});
