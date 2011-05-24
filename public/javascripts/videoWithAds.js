(function($){
//Video with ads
var inps = [], inpbaseid = '#service_contract_quantity', r,
  lastVals = [], nowSlidingIndex;
var whichValsChanged = function(vs, noupdate){
  var i, indexes = [];
  for (i=0; i<6; i++) {
    if (vs[i] !== lastVals[i]) {
      indexes.push({
        index: i,
        direction: vs[i] > lastVals[i] ? 'up' : 'down'
      });
    }
  }
  if (!noupdate) {
    lastVals = vs;
  }
  return indexes;
};
var checkBarriers = function(ev, ui, log){
  var vs = ui.values, i, index, indexes = whichValsChanged(ui.values);
  if (indexes.length === 0) {
    return;
  }
  if (indexes[0].direction === 'down') {
    index = indexes[indexes.length-1].index;
    for (i=index; i>0; i--) {
      if (vs[i] < vs[i-1]) {
        r.slider('values', i-1, vs[i]);
      }
    }
  } else {
    //push right barrier
    index = indexes[0].index;
    for (i=index; i<5; i++) {
      if (vs[i] > vs[i+1]) {
        r.slider('values', i+1, vs[i]);
      }
    }
  }
};
var updateInputs = function(values){
  var i, inp;
  for (i=0; i<6; i++) {
    inp = inps.eq(i).val(values[i]);
    inp.data('thisSpan').html(values[i]);
    if (i > 0) {
      inp.data('prevSpan').html(values[i-1]);
    }
  }
};
RG.videoWithAds = function(){
  inps = $('div.vwa_quantity input');
  r = $('div.vwa-slider').slider({
    min: 0,
    max: 75,
    step: .5,
    values: [
      inps.eq(0).val(),
      inps.eq(1).val(),
      inps.eq(2).val(),
      inps.eq(3).val(),
      inps.eq(4).val(),
      inps.eq(5).val()
    ],
    change: function(ev, ui){
      updateInputs(ui.values);
      checkBarriers(ev, ui);
    },
    slide: function(ev, ui){
      updateInputs(ui.values);
      checkBarriers(ev, ui);
    }
  });
  lastVals = r.slider('values');
  inps.each(function(index){
    var $this = $(this), outerDiv = $this.closest('div.priceRange');
    $this.data({
        index: index,
        prevSpan: outerDiv.find('span.vwa-quantity-prev:first'),
        thisSpan: outerDiv.find('span.vwa-quantity-this:first')
    });
  });
  inps.bind('change', function(ev){
    var index = $(ev.target).data('index');
    r.slider('values', index, ev.target.value);
  });
};
}(jQuery));

