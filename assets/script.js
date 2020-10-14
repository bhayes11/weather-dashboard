$(document).ready(function () {
  //console.log("hello");

  //Main city forecast
  //function cityForecast(city) {
  var apiKey = "63de61e390b4a0f5e75ff9df058d248b";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Atlanta" +
    city +
    "&appid=" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);

    //var tempF = (response.main.temp - 273.15) * 1.8 + 32;

    $("currentCityTemp").text(tempF + "F");
    //var lat = response.coord.lat;
    //var lon = response.coord.lon;
    //queryURL = "https://api.openweathermap.org/data/2.5/weather?q=;
  });
  //}

  //document.getElementById("searchBtn").addEventListener("click", cityForecast);
  //console.log(searchBtn + "clicked");
});
