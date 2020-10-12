$(document).ready(function () {
  console.log("hello");

  //Main city forecast
  var apiKey = "63de61e390b4a0f5e75ff9df058d248b";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=atlanta" +
    "&appid=" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
  });
});
