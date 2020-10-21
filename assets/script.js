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
        getUV(lat, lon);
        fiveDay(cityNameValue)
      }

    });
  }
  function getUV(lat, lon) {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/uvi?appid=63de61e390b4a0f5e75ff9df058d248b&lat=" + lat + "&lon=" + lon
    console.log(queryURL)
    $.ajax({
      url: queryURL,
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log("UV Resp: ", response)
        var uviEl = $("<p>").text("UV Index: ");
        var btn = $("<span>").addClass("btn btn-sm").text(response.value);

        if (response.value < 3) {
          btn.addClass('btn-success');
        } else if (response.value < 7) {
          btn.addClass('btn-warning');
        } else {
          btn.addClass('btn-danger');
        }
        $('#currentCityUv').empty().append(uviEl.append(btn))
      }
    })


  }


  function fiveDay(searchValue) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=63de61e390b4a0f5e75ff9df058d248b&units=imperial",
      dataType: "json",
      success: function (data) {
        $("#forecast").empty();
        for (var i = 0; i < data.list.length; i++) {

          if (data.list[i].dt_txt.indexOf("15:00:00") !== -1) {

            var col = $("<div>").addClass("col-md-2");
            var card = $("<div>").addClass("card bg-primary text-white");
            var body = $("<div>").addClass("card-body p-2");

            var title = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString());

            var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

            var p1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp_max + " °F");
            var p2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%");


            col.append(card.append(body.append(title, img, p1, p2)));
            $("#forecast").append(col);
          }
        }
      }
    });
  }


});
