$(document).on('click','.quick', function(){
   $(this).next('.show').fadeIn();
});

$(document).on('click','.close_popup', function(){
   $('.show').fadeOut();
});
