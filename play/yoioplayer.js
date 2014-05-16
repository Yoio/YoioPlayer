var lrcdata;
var player = document.getElementById('yoioPlayer');


function playPause2()
{ 
	lrc();
	if (player.paused){
	  player.play(); 
	  $('.yoioplay').attr('class','yoiopause');
	}else{ 
	  player.pause();
	  $('.yoiopause').attr('class','yoioplay');
	} 
} 

function lrc(){
	$.ajax({
	   type: "POST",
	   url: "lrc.php",
	   success: function(msg){
	      lrcdata = eval(msg);;
	   }
	});
}

function showlrc(t){
	var div1=document.getElementById("lrc");//取得层
	div1.innerHTML=" ";//每次调用清空以前的一次
	for(var k=0;k<lrcdata.length;k++){
		if(lrcdata[k].time<=t&&t<lrcdata[k+1].time)
		{
			div1.innerHTML+="<font class=\"yoiolrc\">"+lrcdata[k].text+"</font><br>";
		}
	}
}

player.addEventListener("timeupdate", showtime, true);
function showtime() {
	var alltime = player.duration;
	var nowtime = player.currentTime;
	var persent = (nowtime/alltime)*100;
	$('.bar').attr('style',"width:"+persent+"%;");
	// $('.time').html(alltime+"|"+nowtime+"|"+persent+"%");
	// $('.showtime').html(parseInt(nowtime/60)+":"+parseInt(nowtime%60)+"-"+parseInt(alltime/60)+":"+parseInt(alltime%60));
	// $('.now').html(parseInt(nowtime/60)+":"+parseInt(nowtime%60));
	// $('.end').html(parseInt(alltime/60)+":"+parseInt(alltime%60));
	
	if(nowtime == alltime){
		$('.yoioplay').attr('class','yoioreplay');
	}
	var ms = parseInt(nowtime);
	showlrc(ms);
}