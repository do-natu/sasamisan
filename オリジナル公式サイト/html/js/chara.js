
$(function() {

var pre = $('#Prev') ;
var nex = $('#Next') ;
var page = 1;

// Next ボタン 次へ

nex.click(function() {
    page++;

if(page == 2) {
    //主人公消す
        $('#crIllst').animate({opacity:0 , margin:"-40px 0 0 0"}, { duration: 300});
            $('.crText').animate({opacity:0 , margin:"40px 0 0 0"}, { duration: 300});
            $('.crTx').animate({opacity:0 , bottom:"40px"}, { duration: 300});

    //アダム出す
        setTimeout(function(){
        $('#crIllst2').animate({opacity:1 , margin:"0px"}, { duration: 400});
        
            $('.crText2').animate({opacity:1 , margin:"0px"}, { duration: 400});
            $('.crTx2').animate({opacity:1 , bottom:"80px"}, { duration: 400});
        //色変更
        $('.linebox').animate({width:"0%"}, { duration: 300});}, 500);
    
    //一回だけpre表示
        pre.show();
      }

if(page == 3) {
    //アダム消す
        $('#crIllst2').animate({opacity:0 , margin:"-40px 0 0 0"}, { duration: 300});
            $('.crText2').animate({opacity:0 , margin:"40px 0 0 0"}, { duration: 300});
            $('.crTx2').animate({opacity:0 , bottom:"40px"}, { duration: 300});

    //那智谷出す
        setTimeout(function(){
        $('#crIllst3').animate({opacity:1 , margin:"0px"}, { duration: 400});
        
            $('.crText3').animate({opacity:1 , margin:"0px"}, { duration: 400});
            $('.crTx3').animate({opacity:1 , bottom:"80px"}, { duration: 400});
        //色変更
        $('.linebox2').animate({width:"0%"}, { duration: 300});}, 500);
    
        nex.hide();
      }

});









// Prev ボタン 前へ

pre.click(function() {
    page--;

if(page == 1) {
    //主人公出す
        setTimeout(function(){
        $('#crIllst').animate({opacity:1 , margin:"0px"}, { duration: 400});
            $('.crText').animate({opacity:1 , margin:"0px"}, { duration: 400});
            $('.crTx').animate({opacity:1 , bottom:"80px"}, { duration: 400});
        //色変更
        $('.linebox').animate({width:"100%"}, { duration: 300});}, 500);
    //アダム消す
            $('#crIllst2').animate({opacity:0 , margin:"-40px 0 0 0"}, { duration: 300});
            $('.crText2').animate({opacity:0 , margin:"40px 0 0 0"}, { duration: 300});
            $('.crTx2').animate({opacity:0 , bottom:"40px"}, { duration: 300});
    
    //初回だけ消す
        pre.hide();
      }

if(page == 2) {
    //アダム出す
    setTimeout(function(){
        $('#crIllst2').animate({opacity:1 , margin:"0px"}, { duration: 400});
            $('.crText2').animate({opacity:1 , margin:"0px"}, { duration: 400});
            $('.crTx2').animate({opacity:1 , bottom:"80px"}, { duration: 400});
    //色変更
            $('.linebox2').animate({width:"100%"}, { duration: 300});}, 500);
    //那智谷消す
            $('#crIllst3').animate({opacity:0 , margin:"-40px 0 0 0"}, { duration: 300});
            $('.crText3').animate({opacity:0 , margin:"40px 0 0 0"}, { duration: 300});
            $('.crTx3').animate({opacity:0 , bottom:"40px"}, { duration: 300});
    //初回だけ出す
        nex.show();
      }

});






//最初の遷移
//キャラ上から
    $('#crIllst').animate({opacity:1 , margin:"0px"}, { duration: 600});
//テキスト等下から
    setTimeout(function(){
        $('.crText').animate({opacity:1 , margin:"0px"}, { duration: 400});
        $('.crTx').animate({opacity:1 , bottom:"80px"}, { duration: 400});}, 250);



//ライン左から
    setTimeout(function(){
        $('.linebox0').animate({width:"0%"}, { duration: 300}, 'easeInOutExpo');
    }, 800);






});

