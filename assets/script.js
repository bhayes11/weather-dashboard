$(document).ready(function () {
  //console.log("hello");

  //call back function
  $('#searchBtn').click(function () {
    var cityName = $("#form-city").val();
    console.log(cityName)
    cityForecast(cityName);
  });


  //Main city forecast
  function cityForecast(cityNameValue) {
    var apiKey = "63de61e390b4a0f5e75ff9df058d248b";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityNameValue +
      "&appid=" +
      apiKey;
    console.log(queryURL)
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "json",
      success: function (response) {

        console.log(response);

        var tempF = Math.round((response.main.temp - 273.15) * 1.8 + 32);

        $("#currentCityTemp").text(tempF + "F");

        $("#currentCityHumid").text(response.main.humidity);
        $("#currentCityWind").text(response.wind.speed);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
      }

    });
  }


});
