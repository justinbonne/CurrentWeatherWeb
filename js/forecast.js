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
		that.loadingModal(true);
		$.ajax({
			"url": this.baseUrl+this.apiKey+"/"+this.latitude+","+this.longitude+"?"+$.param(this.options),
			"dataType": "jsonp",
			"success": function(data){
				console.log(data);
				that.weather = data;
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
}