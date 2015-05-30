var Forecast = function (longitude, latitude){
	this.baseUrl = "https://api.forecast.io/forecast/";
	this.apiKey = "9809553ac289203e5f21597f0278a007";
	this.longitude = longitude;
	this.latitude = latitude;
	this.options = {
		"units":"ca"
	};
	this.weather = {};
	this.getCurrentForecast = function(){
		var that = this;
		$.ajax({
			"url": this.baseUrl+this.apiKey+"/"+this.latitude+","+this.longitude+"?"+$.param(this.options),
			"dataType": "jsonp",
			"success": function(data){
				console.log(data);
				that.weather = data;
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
}