fortuneArray = ["omae wa mou shindeiru", "YEET", "Let's storm Area 51", "printf()",
"YEET", "LMAO", "We love OreO", "Hi", "Hello World"];

function play(){
	cookie1.classList.toggle("cookie-hide");
	cookie2.classList.toggle("cookie-show");
	setTimeout(function(){getFortune()}, 2300);
}

function getFortune(){
	rand = Math.floor(Math.random() * (fortuneArray.length - 1));
	fortune.innerText = fortuneArray[rand];
	fortune.style.opacity = 1
	fortune.style.top = "96px";
}

function repeatFortune(){
	fortune.innerText = ' ';
	cookie1.classList.toggle("cookie-hide");
	cookie2.classList.toggle("cookie-show");
}