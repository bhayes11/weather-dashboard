$(document).ready(function () {
  console.log("hello");

  //Main city forecast
  var apiKey = "dddf68f4c5f61b00d927351a5e055c6d";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?id=" + apiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
  });
});
