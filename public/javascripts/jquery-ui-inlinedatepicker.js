(function($){
$.extend($.ui, { inlinedatepicker: { version: "1.8.11" } });

$.fn.inlinedatepicker = function(options){
	if (!this.length) {
		return this;
	}
	
	return this.each(function(){
	  var $this = $(this).addClass('offscreen'),
	    div = $('<div></div>').insertAfter($this);
    $this.val($this.val().split(' ')[0] + ' 00:00:00 UTC');
	  div.datepicker($.extend({}, options, {
        altField: $this,
        defaultDate: $this.val()
      })
    );
	  $this.data('datepickerdiv', div);
	});
};

}(jQuery));
