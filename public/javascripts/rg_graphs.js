RG.graph = function() {
  
  var datepicker_handler_error = function(){
    alert("Date Picker onSelect handler is not set");
  }

  // The Object literal returned
  return {

    // default options for jqplot chart
    chart_options : { 
      title:'Past 30 Days',
      axes:{
        xaxis:{
          renderer:$.jqplot.DateAxisRenderer,
          rendererOptions:{tickRenderer:$.jqplot.CanvasAxisTickRenderer},
          tickOptions:{
            formatString: "%b %#d, %Y",
            fontSize: 10,
            angle: -30
          }
        },
        yaxis:{
          label: 'Streams',
          // many need to be dynamic, based of max value in graph
          // min: 0, max: 1000,
          autoscale: true,
          labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
          labelOptions: {
            fontSize: '10pt'
          },
          rendererOptions:{tickRenderer:$.jqplot.CanvasAxisTickRenderer},
          tickOptions:{
            formatString: "%d",
            fontSize: 10,
            angle: -30
          },
          
        },
      },
      series:[ 
        {label: 'Streams', lineWidth:1, markerOptions:{size: 7, style:'circle'}}, 
      ],
      cursor: {
        showVerticalLine: true,
        showHorizontalLine: false,
        // showCursorLegend: true,
        showToolTip: false,
        zoom: true
      }
    },

    last_datechange_event: false,

    daterange_update: function(start_date, end_date) {
      // hack to handle onChange even firing twice in daterangepicker
      if(!this.last_datechange_event) {
        this.last_datechange_event = true;
        return;
      }else{
        this.first_change_event = false;        
      }
      var chart = this.chart;
      var uri = this.update_uri;
      var date_param= 'start_date='+ start_date+'&end_date='+ end_date;
      // Make the ajax call
      $.ajax({
        url : uri,
        data : date_param,
        type : 'GET',
        dataType : 'json',
        success : function(json) {
          chart.series[0].data = json.data_points[0];
          chart.axes.xaxis.ticks = json.xaxis_ticks;
          chart.title.text = json.title;
          chart.replot({resetAxes: true});
        },

        error:  RG.error_handler
      }); // end ajax call      
      
    },
    
    daterange_piechart_update: function(start_date, end_date) {
      var chart = this.chart;
      var uri = this.uri;
      var date_param= 'start_date='+ start_date+'&end_date='+ end_date;
      // Make the ajax call
      $.ajax({
        url : uri,
        data : date_param,
        type : 'GET',
        dataType : 'json',
        success : function(json) {
          chart.series[0].data = json.data_points;
          chart.axes.xaxis.ticks = json.top_videos_labels;
          chart.title.text = json.title;
          chart.replot({resetAxes: true});
        },
        
        error:  RG.error_handler
      })
    }
  } // end of object literal 
} ();