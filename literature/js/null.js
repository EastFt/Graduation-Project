var flag = 5;

var timer = setInterval(function(){
	document.getElementById("back").innerHTML= flag + "秒后自动跳转到主页";
	flag = flag - 1;
	if(flag<=0){
		window.location.href="../index.html";
	}
},1000);