console.log("fetch up and ready");

const apiKey = "e03ebc5edf6a5fc04467ffe0e3c896b7";
var searchLocationRoot = 'http://api.openweathermap.org/geo/1.0/direct?q='
var requestUrlRoot = 'https://api.openweathermap.org/data/2.5/forecast?lat=';

cityData = {};
fetchData = {};

function getLocation() {
  // capture the value of the saved city in the sidebar if clicked
  $(document).ready(function() {
    $("[data-id]").parent().click(function() {
      var selectedCity = $(this).children().data("id");
      selectedCity = selectedCity.replace(" ", "").trim();

      var searchLocationUrl = searchLocationRoot + selectedCity + '&limit=5&appid=' + apiKey;

      fetch(searchLocationUrl)
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        cityData = data;

        var lat = data[0].lat
        var lon = data[0].lon

        var requestUrl = requestUrlRoot + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';

        fetch(requestUrl)
        .then(function(response){
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          fetchData = data;
    
        renderWeather();

        })
      })
    });
  });
}

getLocation();


function init() {    
}

init();