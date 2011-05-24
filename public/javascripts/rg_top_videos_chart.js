// Initialization
jQuery(document).ready(function() {
  // on the page before plot creation
  $.jqplot.config.enablePlugins = true; 

  // debugging stuff
  //  var top_videos_labels = ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit,"," sed do eiusmod tempor ", "incididunt ut labore et dolore magna aliqua.", "Ut", "enimad", " minim veniam,",  "quis",  "nostrud",  "fexercitation", "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."];
  
  var piechart_options = {
    title: "Top Videos: Past 30 Days",
    // gridPadding not used
    gridPadding: {
      //     top: 10, right:200, bottom:23, left:10
    },
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
          // padding: 20,
          // diameter: 200,
          highlightMouseOver: true,
          showDataLabels: true,
          dataLabelFormatString: '%s',
          // array of top video labels constructed by controller.
          //dataLabels: top_videos_labels ,
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
  // var top_videos_data_points = [["Lorem ipsum dolor sit amet",4444], ["consectetur adipisicing elit,",7777],[" sed do eiusmod tempor ",8888], ["incididunt ut labore et dolore magna aliqua.",9999], ["Ut",5555], ["enimad",88], [" minim veniam,",111], [ "quis",9999], ["Lorem ipsum dolor sit amet",4444], ["consectetur adipisicing elit,",7777],[" sed do eiusmod tempor ",8888], ["incididunt ut labore et dolore magna aliqua.",9999], ["Ut",5555], ["enimad",88], [" minim veniam,",111], [ "quis",9999] ];

  if (top_videos_data_points.length == 0 ) {
    // chart always wants a 2D array
    top_videos_data_points = [[]];
    piechart_options.title = "No Top Videos: Past 30 Days";
  }

  // Create the pie chart for top videos
  var top_videos_chart = $.jqplot('top_videos_chart', [top_videos_data_points], piechart_options);

  $('#top_videos_chart').data('current_chart', top_videos_chart);

  // for showing top videos on piechart mouse over
  $('#top_videos_chart').bind('jqplotDataMouseOver', 
                              function (ev, seriesIndex, pointIndex, data) {
                                var ttip = "<span >" + data[0] +", "+ data[1] + "K <span>";
                                $('#top_videos_chart > .jqplot-cursor-tooltip').append(ttip).show();               
                              }
                             );

  var options = {
    uri: top_videos_update_uri,
    chart: top_videos_chart,
    constrainDates: true,
    earliestDate: Date.parse('09/01/2010'),
    latestDate: new Date(),
    //onClose: RG.graph.daterange_piechart_update
    onChange: RG.graph.daterange_piechart_update
  };

  $('#videos_start_date_picker').daterangepicker(options);
  
});
