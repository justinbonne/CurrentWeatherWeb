var currentForecast;
$(document).ready(function(){
	//show warning if there is no geolocation available
	if(!Modernizr.geolocation){
		$(".geo-warning").removeClass('hidden');
	}
	else{
		var position = navigator.geolocation.getCurrentPosition(function(position){
			var longitude = position.coords.longitude;
			var latitude = position.coords.latitude;
			currentForecast = new Forecast(longitude, latitude);
			currentForecast.getCurrentForecast(function(){
				currentForecast.displayWeather();
			});
		});
	}
});