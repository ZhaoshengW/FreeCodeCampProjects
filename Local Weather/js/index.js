$(document).ready(function(){
  var weatherAPI,lon,lat,weather,temp,debug=0;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
      lon = pos.coords.longitude;
      lat = pos.coords.latitude;  
	  weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=2df8d64b9700e74818b9cc5237c02cbb"; 
	  $.getJSON(weatherAPI, function(data){  
		weather = data.weather[0].main;
		if(weather == "Clouds")
		{
			$("body").css('background-image','url(clouds.jpg)');
		}
		temp = data.main.temp;
		cTemp = temp-273.15;
		fTemp = cTemp*1.8+32;
		roundCTemp = Math.round(cTemp)+" ℃";
		roundFTemp = Math.round(fTemp)+" ℉";
		$("#showLocation").html("longitutde:"+Math.round(lon)+","+"latitude:"+Math.round(lat));
		$("#showWeather").html("weather:"+weather);
		$("#showTemp").html(roundFTemp);
		$("#showAddress").html(weatherAPI);	
		showMap();
	  }); 
    }); 
  }
  var change = document.getElementById("btn").firstChild;
  $('#btn').click(function (){ 		
		if(change.data == "Show Celsius(C)"){
			change.data = "Show Fahrenheit(F)";
			$("#showTemp").html(roundCTemp);
		}else{
			change.data ="Show Celsius(C)";
			$("#showTemp").html(roundFTemp);
		}
  }); 
	function showMap(){
					var googleMapLocation = {center:new google.maps.LatLng(lat,lon),zoom:10,};
					var mapResult = new google.maps.Map(document.getElementById("googleMap"),googleMapLocation);
				}  
  
  
});



