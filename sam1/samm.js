/**
 *
 */


  //メディアクエリ

jQuery(document).ready(function($) {
  //835px以上の場合
    if (window.matchMedia( '(min-width: 835px)' ).matches) {
$(function(){



});

  //834px以下の場合
    } else {
$(function(){


var topBtn1 = $('#sam1');
 topBtn1 .animate({opacity:0})

  $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn1.animate({opacity:1}, { duration: 800});
        }
    });


var topBtn2 = $('#sam2');
 topBtn2 .animate({opacity:0})

  $(window).scroll(function () {
        if ($(this).scrollTop() > 900) {
            topBtn2.animate({opacity:1}, { duration:800});
        }
    });


var topBtn3 = $('#sam3');
 topBtn3 .animate({opacity:0})

  $(window).scroll(function () {
        if ($(this).scrollTop() > 1800) {
            topBtn3.animate({opacity:1}, { duration: 800});
        }
    });


var topBtn4 = $('#sam4');
 topBtn4 .animate({opacity:0})

  $(window).scroll(function () {
        if ($(this).scrollTop() > 2400) {
            topBtn4.animate({opacity:1}, { duration: 800});
        }
    });

});
    };
});



/* テンプレート

var topBtn = $('.tone');
 topBtn .hide()

  $(window).scroll(function () {
        if ($(this).scrollTop() > 100(スクロールの位置)) {
            topBtn.fadeIn(1000);
        } else {
            topBtn.fadeOut();　　　非表示にしたい場合のみ入れる
        }
    });
*/


// 全体に適用

 $(function() {


// PC ヘッダーが途中からついてくる

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




// ハンバーガーメニューの動き

$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav ').toggleClass('show');
return false;

});


$('.back_menue').on('click', function () {
    $('.nav_toggle, .nav  ').toggleClass('show');



   return false;
});


})