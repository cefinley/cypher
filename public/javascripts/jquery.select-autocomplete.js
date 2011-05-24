(function($) {

  $.fn.select_autocomplete = function(options) {
    options = options || {};

    var defaults = {
      minLength: 2,
      inputSize: 30
    };

    options = $.extend(defaults, options);

    return this.each(function() {
      var $this = $(this), data = [],
      $input = $('<input type="text" size="'+ options.inputSize + '"/>');

      if (this.tagName.toLowerCase() != 'select') { return; }

      $this.children('option').each(function() {
        var option = $(this);

        if (option.val() != '') {
          data.push({ value:option.html().replace(/&amp;/g, '&'), id:option.val() });
        }
      });

      $this.after($input);

      $input.autocomplete($.extend(options, { source: data }));

      $input.bind( "autocompleteselect", function(event, ui) {
        $($this.find('option[value=' + ui.item.id + ']')[0]).attr('selected', true);
      });

      $input.blur(function() {
        if (this.value == "") {
          $($this.find('option[value=]')[0]).attr('selected', true);
        }

        if (this.value != $this[0].options[$this[0].selectedIndex].text) {
          $input.val($this[0].options[$this[0].selectedIndex].text);
        }

        $this.change();
      });

      if (typeof $this[0].options[$this[0].selectedIndex] !== 'undefined') { 
        $input.val($this[0].options[$this[0].selectedIndex].text);
      }

      $(this).hide();
    });
  };

})(jQuery);
