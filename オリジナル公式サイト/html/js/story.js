


$(function() {
    $('.img_main').slick({
        arrows:false, // スライドの左右の矢印ボタン
       // asNavFor:'.img_line', // スライダを他のスライダのナビゲーションに設定する（class名またはID名）
        autoplay:true //自動再生
    });
    $('.img_line').slick({
        autoplay:false,
        asNavFor:'.img_main', // スライダを他のスライダのナビゲーションに設定する（class名またはID名）
        focusOnSelect: true, // クリックでのスライド切り替えを有効にするか
        slidesToShow:4, // 表示するスライド数を設定
        slidesToScroll:1 // スクロールするスライド数を設定

    });  









// スムーススクロール

$('a[href^="#"]').on("click", function() {
  var header_height = 70;             //ヘッダーの高さ
  var speed = 400;
  var href= jQuery(this).attr("href");
  var target = jQuery(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - header_height;        //ページトップ-ヘッダーの高さ
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
 });


//各話ボタンホバー
    $('#str').hover(function() {
      $('#str').css({color:'#24a4c4'})}    ,function() {
      $('#str').css({color:'rgba(0,0,0,1)'})});

    $('#strB').hover(function() {
      $('#strB').css({color:'#24a4c4'})}    ,function() {
      $('#strB').css({color:'rgba(0,0,0,1)'})});

    $('#strC').hover(function() {
        $('#strC').css({color:'#24a4c4'})}    ,function() {
        $('#strC').css({color:'rgba(0,0,0,1)'})});

    $('#strD').hover(function() {
      $('#strD').css({color:'#24a4c4'})}    ,function() {
      $('#strD').css({color:'rgba(0,0,0,1)'})});

    $('#strE').hover(function() {
        $('#strE').css({color:'#24a4c4'})}    ,function() {
        $('#strE').css({color:'rgba(0,0,0,1)'})});

    $('#strF').hover(function() {
          $('#strF').css({color:'#24a4c4'})}    ,function() {
          $('#strF').css({color:'rgba(0,0,0,1)'})});

    $('#strG').hover(function() {
            $('#strG').css({color:'#24a4c4'})}    ,function() {
            $('#strG').css({color:'rgba(0,0,0,1)'})});

     $('#strH').hover(function() {
        $('#strH').css({color:'#24a4c4'})}    ,function() {
        $('#strH').css({color:'rgba(0,0,0,1)'})});

    $('#strI').hover(function() {
        $('#strI').css({color:'#24a4c4'})}    ,function() {
        $('#strI').css({color:'rgba(0,0,0,1)'})});

    $('#strJ').hover(function() {
       $('#strJ').css({color:'#24a4c4'})}    ,function() {
       $('#strJ').css({color:'rgba(0,0,0,1)'})});

    $('#strK').hover(function() {
        $('#strK').css({color:'#24a4c4'})}    ,function() {
        $('#strK').css({color:'rgba(0,0,0,1)'})});

    $('#strL').hover(function() {
          $('#strL').css({color:'#24a4c4'})}    ,function() {
          $('#strL').css({color:'rgba(0,0,0,1)'})});


















  });