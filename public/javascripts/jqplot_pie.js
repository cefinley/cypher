var JQPlot = function() {
  return {
    line1: function() {
      line = [['frogs',3], ['buzzards',7], ['deer',2.5], ['turkeys',6], ['moles',5], ['ground hogs',4]];
      return line
    }
  }
} ();

$(function() {
  $.jqplot.config.enablePlugins = true; // on the page before plot creation.  

  // Default Pie Chart
  plot1 = $.jqplot('chart1', [JQPlot.line1()], {
    title: 'Default Pie Chart',
    seriesDefaults:{renderer:$.jqplot.PieRenderer}
  });

  // Pie Chart with Legend and sliceMargin'
  plot2 = $.jqplot('chart2', [JQPlot.line1()], {
    title: 'Pie Chart with Legend and sliceMargin',
    seriesDefaults:{renderer:$.jqplot.PieRenderer, rendererOptions:{sliceMargin:8}},
    legend:{show:true}
  });

  // Pie Chart without the Filling
  plot3 = $.jqplot('chart3', [JQPlot.line1()], {
    title: 'Pie Chart without the Filling',
    seriesDefaults:{
      renderer:$.jqplot.PieRenderer, 
      rendererOptions:{sliceMargin:8, fill:false, shadow:false, lineWidth:5}
    },
    legend:{show:true, location: 'w'}
  });

  // Small Pie Chart
  plot4 = $.jqplot('chart4', [JQPlot.line1()], {
    title: 'Small Pie Chart',
    seriesDefaults:{
      renderer:$.jqplot.PieRenderer, 
      rendererOptions:{sliceMargin:8, fill:false, shadow:false, lineWidth:5, diameter:100}
    },
    legend:{show:true, location: 'w'}
  });
});