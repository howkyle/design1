var future = new Date("Jan 5, 2018 15:37:25").getTime();


countdown = function(){
	var now  = new Date().getTime();
	distance = future - now


	days = Math.floor(distance /(1000*60*60*24))
	hours = Math.floor(distance% (1000*60*60*24)/(1000*60*60))
	minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	seconds = Math.floor((distance % (1000 * 60)) / 1000);


	document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
	  + minutes + "m " + seconds + "s ";
}

setInterval(countdown,1000)
