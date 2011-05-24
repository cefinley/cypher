// JQPlot Module
var JQPlot = function() {
  // private variables and functions

  // the private method used by public methods below to build a set of
  // points

  // calc_func - function used to calcuate the value of one point
  var buildPoints = function(calc_func) {
    var points = [];
    for (var i=0; i<2*Math.PI; i+=0.4){ 
      points.push([i, calc_func(i)]); 
    }
    return points;
  }
  
  // functions used to calculate a the value of one point
  var sinCalc = function(i) {
    return 2*Math.sin(i-.8);
  }

  var powerCalc1 = function(i){
    return 2.5 + Math.pow(i/4, 2);
  } 

  var powerCalc2 = function(i) {
    return -2.5 - Math.pow(i/4, 2);
  }

  // Object Literal that gets returned
  return {
    // public variables and functions

    cosPoints: function(){
      return buildPoints(Math.cos);
    },

    sinPoints: function() {
      return buildPoints(sinCalc);      
      //       var points = [];
      //       for (var i=0; i<2*Math.PI; i+=0.4){ 
      //         points.push([i, 2*Math.sin(i-.8)]); 
      //       }
      //       return points;      
    },
    powPoints1: function() {
      return buildPoints(powerCalc1);
    },
    powPoints2: function() {
      return buildPoints(powerCalc2);
    },

    // click event handler to upda the chart from backend
    updatePlot: function(eventObject) {
      var plot = eventObject.data.chart;
      var uri = eventObject.data.uri;

      $.ajax({
        // the URL for the request
        url : uri,
        // the data to send 
        // (will be converted to a query string)
        // NOT USED yet
        data : { id : 123 },
        // whether this is a POST or GET request
        type : 'GET',
        // the type of data we expect back
        dataType : 'json',
        
        // code to run if the request succeeds;
        // the response is passed to the function
        success : function(json) {
          //alert("json.mydata = " + json.my_data)
          plot.series[0].data = json.my_data;
          plot.redraw();
          $('<h1/>').text(json.title).appendTo(plot_id);
        },
        
        // code to run if the request fails;
        // the raw request and status codes are 
        // passed to the function
        error : function(xhr, status) {
          alert('Sorry, there was a problem!');
          alert(status);
        },
        
        // code to run regardless of success or failure
        complete : function(xhr, status) {
          alert('The request is complete!');
        }
      }); // end ajax call
    } // end updatePlot

  } // end object literal return
}(); // JQPlot module


// Initialization
jQuery(document).ready(function() {
  $.jqplot.config.enablePlugins = true; // on the page before plot creation.  
  
  /*
    var plotOptions = { 
    title:'Line Style Options', 
    series:[ 
    {lineWidth:2, markerOptions:{style:'dimaond'}}, 
    {showLine:false, markerOptions:{size: 7, style:'x'}}, 
    {markerOptions:{style:'circle'}}, 
    {lineWidth:5, markerOptions:{style:'filledSquare', size:14}}
    ]
    }
    
    var plot1 = $.jqplot('chart1', [JQPlot.cosPoints(), JQPlot.sinPoints(),JQPlot.powPoints1(), JQPlot.powPoints2()],plotOptions);
  */

  // Plot 1 
  var plot1 = $.jqplot('chart1', [JQPlot.cosPoints(), JQPlot.sinPoints(),JQPlot.powPoints1(), JQPlot.powPoints2()], { 
    title:'Line Style Options', 
    series:[ 
      {lineWidth:2, markerOptions:{style:'dimaond'}}, 
      {showLine:false, markerOptions:{size: 7, style:'x'}}, 
      {markerOptions:{style:'circle'}}, 
      {lineWidth:5, markerOptions:{style:'filledSquare', size:14}}
    ]
  });
  
  // Plot 2 
  var plot2 = $.jqplot('chart2', [JQPlot.cosPoints()], { 
    title:'Shadow Options', 
    series:[
      {
        showMarker:false, 
        lineWidth:5, 
        shadowAngle:0, 
        shadowOffset:1.5, 
        shadowAlpha:.08, 
        shadowDepth:6
      }
    ]
  });

  // Chart 3
  line1=[[1,1], [1.5, 2.25], [2,4], [2.5,6.25], [3,9], [3.5,12.25], [4,16]];
  line2=[25, 17.5, 12.25, 8.6, 6.0, 4.2, 2.9];
  line3=[4, 25, 13, 22, 14, 17, 15];
  var plot3 = $.jqplot('chart3', [line1, line2, line3], {
    legend:{show:true}, 
    title:'Mixed Data Input Formats',
    series:[
      {label:'Rising line', showLine:false, markerOptions:{style:'square'}},
      {label:'Declining line'}, 
      {label:'Zig Zag Line', lineWidth:5, showMarker:false}
    ]
  });

  // Chart 4
  line1=[[1,1], [1.5, 2.25], [2,4], [2.5,6.25], [3,9], [3.5,12.25], [4,16]];
  line2=[25, 12.5, 6.25, 3.125];
  xticks = [[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five']];
  yticks = [-5, 0, 5, 10, 15, 20, 25, 30];
  var plot4 = $.jqplot('chart4', [line1, line2], {
    legend:{show:true}, 
    title:'Customized Axes Ticks',
    grid: {background:'#f3f3f3', gridLineColor:'#accf9b'},
    series:[
      {label:'Rising line', markerOptions:{style:'square'}}, 
      {label:'Declining line'}
    ],
    axes:{
      xaxis:{ticks:xticks}, 
      yaxis:{ticks:yticks, tickOptions:{formatString:'%d'}}
    }
  });

  // click handler to update plot1
  $("#chart1_update").bind('click', {'chart': plot1, 'uri': '/admin/core_update_chart1'}, JQPlot.updatePlot );
});
