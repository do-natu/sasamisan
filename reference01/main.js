
/*
const stalker = document.getElementById('stalker'); 

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
*/


$(function() {

//マウスストーカー
	var stk=$("#stalker");
	$(document).on("mousemove",function(e){
		//マウス位置を取得するプロパティ
		var x=e.clientX;
		var y=e.clientY;
        
		//ちょっと遅れて追従
		setTimeout(function(){
			stk.css({ "transform":"translate("+x+"px,"+y+"px)" });
		},100);
	});
	
//aタグホバーでマウスストーカー変化
	$("a").hover(function() {
			//Choverクラス付与
            stk.addClass("chover");
            stk.removeClass("stalker");
		},function() {
            stk.removeClass("chover");
            stk.addClass("stalker");
			
		});

//サイドコンテンツ スクロールで表示非表示
        var hmn = $('#side');
        hmn .hide();
       
         $(window).scroll(function () {
               if ($(this).scrollTop() > 600) {
                   hmn.fadeIn(300);
               }else{
                   hmn.fadeOut(300);
            } 
           });




// サイドコンテンツランダム表示

//ページ遷移時のランダムテキスト
	var fstText = [
		'こんにちは',
		'こんばんは',
		'夜！',
		'Sasamisan.',
		'おはようございます',
		'最初のランダムテキスト',
 	 ];
	var ranFtxt = fstText[Math.floor(Math.random() * fstText.length)];
	$('#hmnT').text(ranFtxt);


//2回目以降のランダムテキスト
/*
$(window).scroll(function () {
	$('#hmnT').text( $(window).scrollTop())
	});
	*/


	setInterval(function(){	aaa() },8000);

	function aaa(){

		var hmnText = [
			'ありがとうございます！',
			'隣の客はよく柿食う客だ',
			'朝！',
			'お疲れ様でした〜',
			'I`m so happy.',
			'民間人の夜',
			'ランダムテキスト',
			'長めの早口言葉→可逆反応の逆不可逆反応、不可逆反応の逆可逆反応、可逆反応も不可逆反応も化学反応'
		  ];
	
 	 var rantxt = hmnText[Math.floor(Math.random() * hmnText.length)];
		$('#hmnT').text(rantxt);
	}

// コンテンツ4のテキストフェードイン

/*	$(window).scroll(function () {
		if ($(this).scrollTop() >  3200 ) {
			$('.c4box p').addClass('.c4fade');
		}
	});*/

	var topBtn1 = $('.c4box p');
	topBtn1 .animate({opacity:0})
   
	 $(window).scroll(function () {
		   if ($(this).scrollTop() > 3200) {
			   topBtn1.animate({opacity:1},  1000);
		
		   }
	   });


//画像ホバー 手
$(".hap").hide();

var hand = '#hand';

$('#hand').hover(function(){
	$('#a').animate({left:'0px'},500);
	$('#b').animate({right:'0px'},500);
	$(".hap").fadeIn(500);
}, function() {
		//色指定を空欄にすれば元の色に戻る
	$('#a').animate({left:'-130px'},500);
	$('#b').animate({right:'-130px'},500);
	$(".hap").fadeOut(500);
	});


//--------------------
	$(".hap2").hide();

	var hand = '#hand';
	
	$('#hand2').hover(function(){
		$('#aa').animate({left:'0px'},500);
		$('#bb').animate({right:'0px'},500);
		$(".hap2").fadeIn(500);
	}, function() {
			//色指定を空欄にすれば元の色に戻る
		$('#aa').animate({left:'-130px'},500);
		$('#bb').animate({right:'-130px'},500);
		$(".hap2").fadeOut(500);
		});












});






