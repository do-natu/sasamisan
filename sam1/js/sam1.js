/**
 *
 */
 $(function() {


$('.tone').hide().fadeIn(1500);


$('.tone2')
	.hide()
	.fadeIn(1000)	;



/*
 $('.tone').addClass('move');
  $(window).scroll(function(){
    $(".tone").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("p").removeClass('move');
      } else {
        $(this).find("p").addClass('move');
      }
    });
  });
*/





/* PC ヘッダーが途中からついてくる */

var _window = $(window),
    _header = $('.site-header'),
    heroBottom;

_window.on('scroll',function(){
    heroBottom = $('.gif').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('fixed');
    }
    else{
        _header.removeClass('fixed');
    }
});

_window.trigger('scroll');




/*ハンバーガーメニューの動き*/

$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav ').toggleClass('show');
return false;

});



$('.back_menue').on('click', function () {
    $('.nav_toggle, .nav  ').toggleClass('show');



   return false;
});














});