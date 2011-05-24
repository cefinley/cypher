jQuery(document).ready(function() {
  // set the default CPM
  // in millions
  //_(['0.5', '3.0', '5.0', '10.0', '25.0', '50.0']).each(function(e, i) {   
  _(price_term_quantities).each(function(e, i) {       
    var qnum = i +1;
    // alert("element = " + e);
    //  alert("index = " + qnum);
    $('#service_contract_quantity'+qnum).attr('value', e);
  });

  // in dollars
  _(price_term_prices).each(function(e, i) {   
    var qnum = i +1;
    $('#service_contract_price'+qnum).attr('value', e);
  });

  $('#service_contract_price_unlimited').attr('value', '1.00');

  $('#service_contract_price_without_ad').attr('value', '0.50');


});
