
function draw(){
    canvas = document.getElementById("canvas");
    c = canvas.getContext("2d");
    //canvasの領域を画面サイズに
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;

	//グラデーションの設定と描画
    var g = c.createLinearGradient(canvas.width/2, 0, canvas.width/2, canvas.height);
	g.addColorStop(0, '#000');
	g.addColorStop(1, '#021a69');
	c.fillStyle = g;
    c.fillRect(0,0,canvas.width,canvas.height);

	var maxX = Math.floor(canvas.width/10);
	var maxY = Math.floor(canvas.height/10);

	//流れ星*************************************	

	//translateする前の状態を保持
	c.save();

	var x00 = 100;
	var y00 = 100; 
	var len = 300;
	var dia0 = 2;
	c.translate(600,100);
	c.rotate(-(18 * Math.PI / 180));
	c.fillStyle = "#ffffff"; 
	c.beginPath();
	c.moveTo(x00,y00);
	c.lineTo(x00+len,y00+dia0*2);	
	c.lineTo(x00,y00+dia0*2);
	c.closePath();
	c.fill();	
	c.beginPath();
	c.arc(x00,y00+dia0,dia0,0, Math.PI*2, false);
	c.fill();	
	c.closePath();

	//前の状態を戻す
	c.restore();

	//光り輝く星*************************************		
	for(var i=0; i<15; i++){
		var x1 = Math.floor(Math.random()*maxX)*10;
		var y1 = Math.floor(Math.random()*maxY)*10;
		var dia = Math.floor(Math.random()*10)+15;
		c.lineWidth=0;
		c.strokeStyle = "#ffffff"; 
		c.fillStyle = "rgba(255, 255, 255, 0.1)"; 
		//外側の円
		c.shadowColor = "#ffffff";
		c.shadowOffsetX = 0;
		c.shadowOffsetY = 0;
		c.shadowBlur = 3;
		c.beginPath();
		c.arc(x1, y1, dia/2.5, 0, Math.PI*2, false); 
		c.closePath();	
		c.fill();
		//内側の円
		c.beginPath();
		c.fillStyle = "#ffffff"; 
		c.arc(x1, y1, dia/5, 0, Math.PI*2, false);
		c.closePath();	
		c.fill();
		//横棒
		c.beginPath();
		c.moveTo(x1-dia,y1);
		c.lineTo(x1,y1-1);	
		c.lineTo(x1+dia,y1);
		c.lineTo(x1,y1+1);
		c.closePath();
		c.fill();
		//縦棒
		c.beginPath();
		c.moveTo(x1,y1-dia);
		c.lineTo(x1-1,y1);	
		c.lineTo(x1,y1+dia);
		c.lineTo(x1+1,y1);
		c.closePath();
		c.fill();
	}

	//通常の星(円だけ)*************************************
	var a = [1,1,1,1,1.5,1.5,2,2.5];	
	c.fillStyle = "#ffffff";
	c.shadowColor = "#ffffff";
	c.shadowOffsetX = 0;
	c.shadowOffsetY = 0;
	c.shadowBlur = 3;
    for(var i = 0; i< 300; i++){   
		var x = Math.floor(Math.random()*maxX)*10;
		var y = Math.floor(Math.random()*maxY)*10;
		var n = Math.floor(Math.random()*a.length);
		var radius = a[n];
		c.beginPath();
		c.arc(x, y, radius, 0, Math.PI*2, false);
		c.closePath();
		c.fill();
	}

	//輝く星（円＋十字）*********************************
	for(var i=0; i<20; i++){
		var x = Math.floor(Math.random()*maxX)*10;
		var y = Math.floor(Math.random()*maxY)*10;
		
		//円
		var dist = Math.floor(Math.random()*3)+1;
		c.fillStyle = "#ffffff";
		c.shadowBlur = 4;
		c.beginPath();
		c.arc(x, y, dist, 0, Math.PI*2, false); 
		c.closePath();
		c.fill();

		var diff = dist*(2/3);
		//横棒
		c.lineWidth=0.8;
		c.strokeStyle = "#ffffff"; 
		c.beginPath();
		c.moveTo(x-(dist+diff),y);
		c.lineTo(x+dist+diff,y);
		c.closePath();
		c.stroke();
		
		//縦棒
		c.beginPath();
		c.moveTo(x,y-(dist+diff));
		c.lineTo(x,y+dist+diff);
		c.closePath();
		c.stroke();
	}
}