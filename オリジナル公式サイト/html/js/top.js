

$(function() {


// スライドショー
      $('.slide img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".slide img:first-child").fadeOut(800);
        $(".slide img:nth-child(2)").fadeIn(800);
        $(".slide img:first-child").appendTo(".slide");
      }, 4000);



// slick
$('.nws_slide').slick({
  infinite: true, //スライドのループ有効化
  dots:true, //ドットのナビゲーションを表示
  centerMode: true, //要素を中央寄せ
  centerPadding:'10%', //両サイドの見えている部分のサイズ
  autoplay:true, //自動再生
});
 





    
 


});