
$(function() {
    
//ヘッダーとフッター
    $('.Nmenu').hide();
    $('#News').hover(function(){
        setTimeout(function(){
             $('.Nmenu').slideDown(300);}  , 200);
        }, function() {
            $('.Nmenu').slideUp(300);
        });
             
//本文フェードイン
    $('#mainFade').animate({opacity:1 , margin:"0px"}, { duration: 600});


//キャラ2段目フェードイン
    var crSec = $('#crTop');
    crSec .animate({opacity:0})

    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
           crSec.animate({opacity:1 , margin:"0px"}, { duration:1000});}
           });














});