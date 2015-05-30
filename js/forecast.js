var Forecast = function (longitude, latitude){
	this.baseUrl = "https://api.forecast.io/forecast/";
	this.apiKey = "9809553ac289203e5f21597f0278a007";
	this.longitude = longitude;
	this.latitude = latitude;
	this.options = {
		"units":"ca"
	};
	this.weather = {};
	this.getCurrentForecast = function(callback){
		var that = this;
		that.loadingModal(true);
		$.ajax({
			"url": this.baseUrl+this.apiKey+"/"+this.latitude+","+this.longitude+"?"+$.param(this.options),
			"dataType": "jsonp",
			"success": function(data){
				console.log(data);
				that.weather = data;
				callback();
			},
			"complete": function(){
				that.loadingModal(false);
			}
		});
	};
	this.loadTest = function (testName){
		var that = this;
		$.ajax({
			"url": "/tests/"+testName+".json",
			"dataType": "json",
			"success": function(data){
				console.log(data);
				that.weather = data;
			}
		});
	};
	this.loadingModal = function(toggle){
		if(toggle === true){
			$("#loadingModal").modal({
				"backdrop": "static",
				"keyboard": false
			});
		}
		else{
			$("#loadingModal").modal("hide");
		}
	};
	this.displayWeather = function(){
		//conditions
		$(".weather .icon i").attr("class", "wi "+this.icons[this.weather.currently.icon]).text("");
		$(".weather .summary").text(this.weather.currently.summary);
		
		//temperature
		$(".weather .temperature span").text(Math.ceil(this.weather.currently.apparentTemperature));
		
		//wind speed/direction
		var closestWind = Math.round(this.weather.currently.windBearing/15)*15;
		$(".weather .windSpeed span").text(Math.ceil(this.weather.currently.windSpeed));		
		$(".weather .windBearing i").attr("class", "wi wi-wind-default _"+closestWind+"-deg");
		
		//preciption percentage/type
		var precipIntensity = this.weather.currently.precipIntensity;
		var precipQuantifier = "";
		if(precipIntensity > 0 && precipIntensity <= 0.005){
			precipQuantifier = "very light";
		}
		else if(precipIntensity > 0.005 && precipIntensity <= 0.043){
			precipQuantifier = "light";
		}
		else if(precipIntensity > 0.043 && precipIntensity <= 0.254){
			precipQuantifier = "moderate";
		}
		else if(precipIntensity > 0.254){
			precipQuantifier = "heavy";
		}
		$(".weather .precipProbability span").text(Math.ceil(this.weather.currently.precipProbability));
		if(this.weather.currently.precipProbability > 0 && this.weather.currently.precipType){
			$(".weather .precipIntensity span").text(precipQuantifier+" "+this.weather.currently.precipType);
		}
		else{
			$(".weather .precipIntensity span").text("");
		}

		//humidity
		$(".weather .humidity span").text(this.weather.currently.humidity*100);
	};
	this.icons = {
		"clear-day": "wi-day-sunny",
		"clear-night": "wi-night-clear",
		"rain": "wi-rain",
		"snow": "wi-snow",
		"sleet": "wi-sleet",
		"wind": "wi-windy",
		"fog": "wi-fog",
		"cloudy": "wi-cloudy",
		"partly-cloudy-day": "wi-day-cloudy",
		"partly-cloudy-night": "wi-night-alt-cloudy"
	};
}