$(window).scroll(function () {
   if($(window).scrollTop()>0){
    $('.navbar').css('background','#033f47de');
   } else {
    $('.navbar').css('background','transparent');
   }
});