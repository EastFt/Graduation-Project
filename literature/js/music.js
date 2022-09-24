window.onload = function() {
    var audio = document.getElementById('music');
    audio.pause();
}

function play(){
    var audio = document.getElementById('music');
    if (audio.paused){
        audio.play();
    } else{
        audio.pause();
    }
}

let oBtn=document.getElementById("pret");
		oBtn.onclick=function(){
			var speed=10;
			var time = setInterval(function(){
				document.documentElement.scrollTop-=speed;
				if(document.documentElement.scrollTop<=1000){
					speed = 5;
				}
				if(document.documentElement.scrollTop<=0){
					clearInterval(time);
				}
			})
			
		}
	