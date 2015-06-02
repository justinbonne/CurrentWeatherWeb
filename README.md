#CurrentWeatherWeb

##Scope
An small website that uses geolocations to 
get the current weather conditions using the
[forcast.io](https://developer.forecast.io/) api.

##Implementation
The basic layout is built using [bootstrap](http://getbootstrap.com) to provide
a responsive layout that looks good on all devices.
Icons for weather conditions, wind bearing and loading modal
are provided using [fontAwesome](http://fontawesome.io) and
erikflowers [weather Icons](http://erikflowers.github.io/weather-icons/).
[Modernizr](http://modernizr.com/) is used to detect if the current
browser has geolocation and displays an error message if it doesn't.
I've made a reusable forecast prototype (forecast.js) that handles all the communication with
and data storage for the [forcast.io](https://developer.forecast.io/) api. It
also includes utility methods to convert returned data into weather icon classes
that can be used by the GUI.

#Testing
You can use the javascript console to load sample data from json from the tests
folder. The current tests are for various icons, preciption types and wind
directions.

Example:

```javascript
//pass the file name with no extension
currentForecast.loadTest("icon-clear-day"); 
//call render after json ajax is complete
currentForecast.render();
```

Available Tests:

* icon-clear-day.json
* icon-clear-night.json
* icon-cloudy.json
* icon-fog.json
* icon-partly-cloudy-day.json
* icon-partly-cloudy-night.json
* icon-rain.json
* icon-sleet.json
* icon-snow.json
* icon-wind.json
* precip-heavy-rain.json
* precip-light-rain.json
* precip-moderate-rain.json
* precip-very-light-rain.json
* wind-10.json
* wind-49.json
* wind-175.json
 
##Libraries
* [Bootstrap](http://getbootstrap.com)
* [FontAwesome](http://fontawesome.io)
* [Weather Icons](http://erikflowers.github.io/weather-icons/)
* [Modernizr](http://modernizr.com/)
* [jQuery](https://jquery.com/)
* [Source Sans Pro (Google Web Font)](https://www.google.com/fonts/specimen/Source+Sans+Pro)
