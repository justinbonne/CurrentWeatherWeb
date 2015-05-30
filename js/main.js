$(document).ready(function(){
	//show warning if there is no geolocation available
	if(!Modernizr.geolocation){
		$(".geo-warning").removeClass('hidden');
	}
	else{
		//get current weather
	}
});