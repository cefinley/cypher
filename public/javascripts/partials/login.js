jQuery(document).ready(function() { 
  
  if ($('.msg-error').size() == 1) {  
    $('#user_session_submit').attr('disabled', 'disabled'); 
    $('#user_session_submit').css('background','grey')
    $('#user_submit').attr('disabled', 'disabled'); 
    $('#user_submit').css('background','grey')
   }; 
  
});                                    