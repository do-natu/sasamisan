/**
 *
 */

$(this).on('click', function () {


//alert('click');


});





 $(function() {


//メニューボタン
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, ul1 ').toggleClass('show');
   $('.main').toggleClass('move');
    $('.back_menue').toggleClass('Bmove');
       return false;

});

//背景押下で消える
$('.back_menue').on('click', function () {
    $('.nav_toggle, ul1  ').toggleClass('show');
    $('.main').toggleClass('move');
    $('.back_menue').toggleClass('Bmove');
       return false;

});


$('.b1i1').hover(function () {
    $('.b1i1 p').css({width:"200px",  height:"200px"});

}, function() {

     $('.b1i1 p').css({width:"0px",  height:"0px"});

 });









//メニューの色
$('.nav_toggle').hover(function(){

  setTimeout(function(){
	$('.nav_toggle i:nth-child(1)').css('background','#38487c');   }, 80);
  setTimeout(function(){
    $('.nav_toggle i:nth-child(2)').css('background','#8c6aaa');   }, 30);

}, function() {

    //色指定を空欄にすれば元の色に戻る
    $('.nav_toggle i').css('background', '#ff8080');

});



$('#move').hover(function () {
   // $('.b2i4').css({color:"#fff"});

	 $('.b2i4').animate({fontSize:60},500);

}, function() {
	$('.b2i4').animate({fontSize:25},500);


 });



/*
$('#clr').hover(function () {
   // $('.b2i4').css({color:"#fff"});

	 $('.b3i1').css({ color: "#99ccff"},500);

}, function() {
	//$('.b3i1').animate({fontSize:25},500);


 });



*/








});