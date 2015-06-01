//instatiate forecast object with api key, render and loading overrides
var currentForecast = new Forecast({
	"apiKey": "9809553ac289203e5f21597f0278a007",
	"render": function(){
		//conditions
		var weatherIcon = Forecast.forecastIconToWeatherIcon(this.weather.currently.icon);
		$(".weather .icon i").attr("class", weatherIcon).text("");
		$(".weather .summary").text(this.weather.currently.summary);

		//temperature (shown as apparent temperature)
		$(".weather .temperature span").text(Math.ceil(this.weather.currently.apparentTemperature));

		//wind speed/direction
		var windIcon = Forecast.windBearingToWeatherIcon(this.weather.currently.windBearing);
		$(".weather .windSpeed span").text(Math.ceil(this.weather.currently.windSpeed));
		$(".weather .windBearing i").attr("class", windIcon);

		//preciption percentage/type
		var precipIntensity = this.weather.currently.precipIntensity;
		var precipQualifier = Forecast.qualifyPrecip(precipIntensity);
		$(".weather .precipProbability span").text(Math.ceil(this.weather.currently.precipProbability));
		//only show the precipition quality/type if there is any precipition
		if(this.weather.currently.precipProbability > 0 && this.weather.currently.precipType){
			$(".weather .precipIntensity span").text(precipQualifier+" "+this.weather.currently.precipType);
		}
		else{
			$(".weather .precipIntensity span").text("");
		}

		//humidity
		$(".weather .humidity span").text(this.weather.currently.humidity*100);
	},
	"loading": function(toggle){
		if(toggle === true){
			$("#loadingModal").modal({
				"backdrop": "static",
				"keyboard": false
			});
		}
		else{
			$("#loadingModal").modal("hide");
		}
	}
});
//get location and send it to forecaste.io
$(document).ready(function(){
	//show warning if there is no geolocation available
	if(!Modernizr.geolocation){
		$(".geo-warning").removeClass('hidden');
	}
	else{
		//get location
		var position = navigator.geolocation.getCurrentPosition(function(position){
			//instantiate Forecast object with longitude and latitude
			currentForecast.longitude = position.coords.longitude;
			currentForecast.latitude = position.coords.latitude;
			//get current for cast and pass display weather as a callback upon completion
			currentForecast.getCurrentForecast(function(){
				currentForecast.render();
			});
		});
	}
});