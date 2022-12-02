console.log("fetch up and ready");
const h1CurrentCityEl = document.getElementById("h1-current-city");
const currentTempEl = document.getElementById("current-city-temp");
const currentWindEl = document.getElementById("current-city-wind");
const currentHumidityEl = document.getElementById("current-city-humidity");

var forecastOneDate = document.querySelector("#forecast-day-one");
var forecastOneDate = forecastOneDate.querySelector("h5");

var forecastOneTemp = document.querySelector("#forecast-day-one");
var forecastOneTemp = forecastOneTemp.querySelector("#p-temp");
var forecastTwoTemp = document.querySelector("#forecast-day-two");
var forecastTwoTemp = forecastTwoTemp.querySelector("#p-temp");
var forecastThreeTemp = document.querySelector("#forecast-day-three");
var forecastThreeTemp = forecastThreeTemp.querySelector("#p-temp");
var forecastFourTemp = document.querySelector("#forecast-day-four");
var forecastFourTemp = forecastFourTemp.querySelector("#p-temp");
var forecastFiveTemp = document.querySelector("#forecast-day-five");
var forecastFiveTemp = forecastFiveTemp.querySelector("#p-temp");

const today = dayjs().format('dddd, MMMM D, YYYY');
const today2 = dayjs()


const apiKey = "e03ebc5edf6a5fc04467ffe0e3c896b7";
var searchLocationRoot = 'http://api.openweathermap.org/geo/1.0/direct?q='
var requestUrlRoot = 'https://api.openweathermap.org/data/2.5/forecast?lat=';


function getLocation() {
  // capture the value of the saved city in the sidebar if clicked
  $(document).ready(function() {
    $("[data-id]").parent().click(function() {
      var selectedCity = $(this).children().data("id");
      selectedCity = selectedCity.replace(" ", "").trim();
      console.log(selectedCity);

      var searchLocationUrl = searchLocationRoot + selectedCity + '&limit=5&appid=' + apiKey;
      console.log(searchLocationUrl);

      fetch(searchLocationUrl)
      .then(function(response){
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        var lat = data[0].lat
        var lon = data[0].lon

        console.log(lat);
        console.log(lon);


        var requestUrl = requestUrlRoot + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=imperial';


        fetch(requestUrl)
        .then(function(response){
          return response.json();
        })
        .then(function(data) {
          console.log(data);
    
          var city = data.city.name;
          var currentWeatherDateTime = data.list[0];
          var currentWeatherDate = data.list[0].dt_txt.substring(0,10);
          var currentWeatherTemp = Math.round(data.list[0].main.temp * 10) / 10;
          var currentWeatherWind = data.list[0].wind.speed;
          var currentWeatherHumidity = data.list[0].main.humidity;
          console.log("City: " + city);
          console.log("DateTime: " + currentWeatherDateTime);
          console.log("Date: " + currentWeatherDate);
          console.log("Temp: " + currentWeatherTemp);
          console.log("Wind speed: " + currentWeatherWind);
          console.log("Humidity: " + currentWeatherHumidity);
    
          h1CurrentCityEl.textContent = city + ' ' + currentWeatherDate;
          currentTempEl.innerHTML = "Temp: " + currentWeatherTemp + "\u00b0F";
          currentWindEl.textContent = "Wind: " + currentWeatherWind + " MPH";
          currentHumidityEl.textContent = "Humidity: " + currentWeatherHumidity + "%";
          
          var dates = [];
          var temps = [];
          var winds = [];
          var humids = [];
    
          for (var i = 0; i < data.list.length; i++) {
        
            var listDateTime = data.list[i].dt_txt;
            var listDate = data.list[i].dt_txt.substring(0,10);
            var temp1 = Math.round(data.list[i].main.temp * 10) / 10;
            var wind1 = data.list[i].wind.speed;
            var humid1 = data.list[i].main.humidity;

            // console.log(listDateTime);
    
            if (listDate>currentWeatherDate && listDateTime.substring(listDateTime.length - 8)=='12:00:00') {
              dates.push(listDateTime);

              console.log(listDateTime);

              temps.push(temp1);
              winds.push(wind1);
              humids.push(humid1);

              console.log(listDateTime);
              console.log(dates);
              console.log(temps);
              console.log(winds);
              console.log(humids);

              forecastOneDate.textContent = dates[0].slice(0,10);    
              
              forecastOneTemp.textContent = "Temp: " + temps[0] + "\u00b0F";
              forecastTwoTemp.textContent = "Temp: " + temps[1] + "\u00b0F";
              forecastThreeTemp.textContent = "Temp: " + temps[2] + "\u00b0F";
              forecastFourTemp.textContent = "Temp: " + temps[3] + "\u00b0F";
              forecastFiveTemp.textContent = "Temp: " + temps[4] + "\u00b0F";
                           
    
              if (dates.length < 5) {
                console.log('not enough forecast days');
              }
            }
          }
        })  

      })
    });
  });
}

getLocation();






// function getApi() {

// }

// getApi();

function init() {    
}

init();


      //   h1CurrentCityEl.textContent = "Test";
      //   // urlLink.textContent = data[i].url;
      //   // urlLink.setAttribute('href', data[i].url);
      //   // urlLink.setAttribute('target', '_blank');

      //   // userContainer.append(userName);
      //   // userContainer.append(url);
      //   // url.append(urlLink);