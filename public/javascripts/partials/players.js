jQuery(document).ready(function() {
  var inspect_player, reload_player;
  $.data(document.body, 'player_object', $('#rg_player_object').metadata());
  window.player = $.data(document.body, 'player_object');
  inspect_player = function() {
    var player;
    player = window.player;
    debugger;
  };
  reload_player = function() {
    swfobject.removeSWF(window.player.required.id);
    $('.flash_player').append('<div id="' + window.player.required.id + '"></div>');
    swfobject.embedSWF(window.player.required.swf, window.player.required.id, window.player.required.width, window.player.required, height, window.player.required.version, window.player.required.expressInstallSwfurl, window.player.flashvars, window.player.params, window.player.attributes);
  };
  $('.player_flashvars').change(function() {
    window.player.flashvars[this.name.split('[')[1].split(']')[0].replace('__', '.').replace('player_', '')] = this.value;
    if ($(this).is('#volume')) {
      $("#volume_slider").slider({
        value: this.value
      });
    }
    if ($(this).is('.sharing-2')) {
      window.player.flashvars['sharing.code'] = this.value === 'true' ? window.player.embed_code : "";
    }
    if ($(this).is('.color')) {
      $(this).css('backgroundColor', '#' + this.value);
      $(this).val(this.value.toUpperCase());
    }
    reload_player();
  });
});