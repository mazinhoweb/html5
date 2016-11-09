/* GLOBAL SCRIPTS
-------------------------------------------------- */
/* Personalização de Scripts
    Mazinho Web | July/09/2016 */


 function navigateToElement(id) {
   $('html, body').animate({
     scrollTop: $("#" + id).offset().top
   }, 1000);
 }

 //jQuery to collapse the navbar on scroll
 $(window).scroll(function() {
   if ($(".navbar").offset().top > 50) {
     $(".navbar-fixed-top").addClass("top-nav-collapse");
   } else {
     $(".navbar-fixed-top").removeClass("top-nav-collapse");
   }
 });

 //jQuery for page scrolling feature - requires jQuery Easing plugin
 $(function() {
   $('a.page-scroll').bind('click', function(event) {
     var $anchor = $(this);
     $('html, body').stop().animate({
       scrollTop: $($anchor.attr('href')).offset().top -70
     }, 1500, 'easeInOutExpo', function(){
       $('ul.navbar-nav li, ul.dropdown-menu li').removeClass('active');
       $($anchor).parent('li').addClass('active');
     });
     event.preventDefault();
   });
 });

   $(document).ready(function(){
     $('.text-block-container').each(function(){
       var maxHeight = 0;

       $(this).find('.text-block').each(function(){
         maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
       });

       $(this).find('.text-block').css('height', maxHeight);
     });
   });
