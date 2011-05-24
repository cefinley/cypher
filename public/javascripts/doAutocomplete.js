(function($){
var selectToInput = function(select){
  select = $(select);
  var inp = $('<input type="text" name="' + select.attr('name') +
    '" value="' + select.val() + '">');
  inp.insertBefore(select);
  select.remove();
  return inp;
};
var autocomplete = function(index, select){
};
if (typeof window.RG === 'undefined') {
  window.RG = {};
}
window.RG.doAutocomplete = function(){
  $('select.autocomplete').select_autocomplete();
};
}(jQuery));
