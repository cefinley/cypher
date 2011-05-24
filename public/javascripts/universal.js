(function($){
//Universal is stuff that's run on every page. This should be very small!
$(function(){
    if (typeof RG !== 'undefined' && typeof RG.doAutocomplete === 'function') {
      RG.doAutocomplete();
    }
    if (typeof $.fn.inlinedatepicker === 'function') {
      $('input.datepicker').inlinedatepicker({
          dateFormat: 'yy-mm-dd 00:00:00 UTC'
      });
    }
    //Fix formtastic markup bug
    $('legend > label').each(function(){
        var $this = $(this), legend = $this.parent();
        $this.insertBefore(legend);
        legend.remove();
    });
});

}(jQuery));
