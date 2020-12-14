/**
 *
 */


/**
 *
 */


$(function(){
var A = 0 ;
var B = 0 ;
var C = 0 ;

var 	    Cnt 			= jQuery('#ContactInput'), //入力部分
			Cfm 			= jQuery('#ContactConfirm'), //確認部分
			BtSnd 		= jQuery('#BtSend input'),//送信ボタン
            BtCsl 		= jQuery('#BtCancel'),//キャンセルボタン
			CntItem 	= jQuery('#ContactInput #Cnt1 #Cnt2 #Cnt3 #Cnt4 #Cnt5'),//入力の包容タグ
			CfmItem 	= jQuery('#ContactConfirm .CfmItem div');//確認の包容タグ



$('#check').on('click', function () {

  var span = $('#span1');
  var name = $('#name').val().length ;  //.val()が無いと値取ってくれない
//  var name = document.getElementById('name').value;　　JSの場合この書き方
//alert(name);

  	if(name == 0){
  	    span.show();
        A = 0;
 	 }else {
	    span.hide();
        A = 1;
}
;})


$('#check').on('click', function () {
	var span = $('#span2');
    var mail = $('#mail').val().length ;

  	if(mail == 0){
  	     span.show();
         B = 0;
	  }else {
	     span.hide();
         B = 1;
}
;})



$('#check').on('click', function () {
	var span = $('#span3');
    var content = $('#maintext').val().length ;

 	 if(content == 0){
  	    span.show();
        C = 0;
 	 }else {
	    span.hide();
        C = 1;
}




if  (A == 1 && B == 1 && C == 1 )  {


//	alert('クリック');


   Cnt.fadeOut(function(){Cfm.fadeIn();}); //入力部分と確認部分を切り替え

   $('#check').animate({opacity:0});        //確認ボタンをフェードアウト
   $('h1').animate({opacity:0});
 // 動きがガタつくので遅延実行
 setTimeout(function(){
     $('#form').addClass("main2").removeClass("main");  },400);




inputText = $("#name").val();
    $("#Cfm1").text(inputText);

inputText = $("#Cname").val();
    $("#Cfm2").text(inputText);

inputText = $("#mail").val();
    $("#Cfm3").text(inputText);

inputText = $("#kenmei").val();
    $("#Cfm4").text(inputText);

inputText = $("#maintext").val();
    $("#Cfm5").text(inputText);

	}
;})



   //書き直しぼたん
    BtCsl.click(function(){ //キャンセルボタンを押したとき、
	Cfm.fadeOut(function(){Cnt.fadeIn();}); //入力部分と確認部分を切り替え
	$('#check').animate({opacity:1}, { duration: 1300});        //確認ボタンをフェードイン
    $('h1').animate({opacity:1}, { duration: 1300});
  //  $('#form').addClass("main").removeClass("main2");

    setTimeout(function(){
     $('#form').addClass("main").removeClass("main2");  },400);


});


$('form').submit(function() {

    alert('送信しました！');

});









;})









/*

// 確認画面へ反映させる関数
jQuery.fn.ConfirmInput = function(config){
    return this.each(function(i, elem) { //.CntItemを一つずつ実行

			//入力されたものを変数「CntVal」に代入
			//<input type="text">の場合
			if($(this).hasClass('CntInput')){
				TargetForm = $(this).find('input');
				CntVal = TargetForm.val();

			//<textarea>の場合
			}else if($(this).hasClass('CntText')){
				TargetForm = $(this).find('textarea');
				CntVal = TargetForm.val();
			}

			//入力部分のIDから関連する確認部分のIDへ「CntVal」を挿入

			CntNum = $(this).attr('id').replace(/Cnt/g,''); //IDを取得後「Cnt」をカット
			$('#Cfm'+CntNum+' div').text(CntVal);


    });
};








	}

;})







/*



var 	Cnt 			= jQuery('#ContactInput'), //入力部分
			Cfm 			= jQuery('#ContactConfirm'), //確認部分
			BtCfm 		= jQuery('#check'), //確認ボタン
			BtSnd 		= jQuery('#BtSend input'),//送信ボタン
			BtCsl 		= jQuery('#BtCancel'),//キャンセルボタン
			CntItem 	= jQuery('#ContactInput #Cnt1 #Cnt2 #Cnt3 #Cnt4 #Cnt5'),//入力の包容タグ
			CfmItem 	= jQuery('#ContactConfirm .CfmItem div');//確認の包容タグ

/* 確認ボタン
------------------------------------------------------------------
BtCfm.on('click',function(){//確認ボタンを押したとき、

  CntItem.ConfirmInput(); //.CntItemを対象として確認の関数を実行

//  if(name < 1 || mail < 1 || content < 1 ){
	// if(name >= 1 && mail >= 1 && content >= 1 ){
switch(name >= 1 && mail >= 1 && content >= 1 ){
		case"ok"

		alert('クリック');
		//Cnt.fadeOut(function(){Cfm.fadeIn();}); //入力部分と確認部分を切り替え
	break;

	}
   }
);



/* キャンセルボタン
------------------------------------------------------------------
BtCsl.click(function(){ //キャンセルボタンを押したとき、
	Cfm.fadeOut(function(){Cnt.fadeIn();}); //入力部分と確認部分を切り替え
});



/* 確認画面へ反映させる関数
------------------------------------------------------------------
jQuery.fn.ConfirmInput = function(config){
    return this.each(function(i, elem) { //.CntItemを一つずつ実行
			/*
			入力されたものを変数「CntVal」に代入
			------------------------------------------------------------
			//<input type="text">の場合
			if($(this).hasClass('CntInput')){
				TargetForm = $(this).find('input');
				CntVal = TargetForm.val();

			//<textarea>の場合
			}else if($(this).hasClass('CntText')){
				TargetForm = $(this).find('textarea');
				CntVal = TargetForm.val();
			}
			/*
			入力部分のIDから関連する確認部分のIDへ「CntVal」を挿入
			------------------------------------------------------------
			CntNum = $(this).attr('id').replace(/Cnt/g,''); //IDを取得後「Cnt」をカット
			$('#Cfm'+CntNum+' div').text(CntVal);


    });
};


*/

