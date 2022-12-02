console.log("render up and ready");
const h1CurrentCityEl = document.getElementById("h1-current-city");
const currentTempEl = document.getElementById("current-city-temp");
const currentWindEl = document.getElementById("current-city-wind");
const currentHumidityEl = document.getElementById("current-city-humidity");

var forecastOneDate = document.querySelector("#forecast-day-one");
var forecastOneDate = forecastOneDate.querySelector("h5");
var forecastTwoDate = document.querySelector("#forecast-day-two");
var forecastTwoDate = forecastTwoDate.querySelector("h5");
var forecastThreeDate = document.querySelector("#forecast-day-three");
var forecastThreeDate = forecastThreeDate.querySelector("h5");
var forecastFourDate = document.querySelector("#forecast-day-four");
var forecastFourDate = forecastFourDate.querySelector("h5");
var forecastFiveDate = document.querySelector("#forecast-day-five");
var forecastFiveDate = forecastFiveDate.querySelector("h5");

var forecastOneInd = document.querySelector("#forecast-day-one");
var forecastOneInd = forecastOneInd.querySelector("#img-icon");
var forecastTwoInd = document.querySelector("#forecast-day-two");
var forecastTwoInd = forecastTwoInd.querySelector("#img-icon");
var forecastThreeInd = document.querySelector("#forecast-day-three");
var forecastThreeInd = forecastThreeInd.querySelector("#img-icon");
var forecastFourInd = document.querySelector("#forecast-day-four");
var forecastFourInd = forecastFourInd.querySelector("#img-icon");
var forecastFiveInd = document.querySelector("#forecast-day-five");
var forecastFiveInd = forecastFiveInd.querySelector("#img-icon");

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

var forecastOneWind = document.querySelector("#forecast-day-one");
var forecastOneWind = forecastOneWind.querySelector("#p-wind");
var forecastTwoWind = document.querySelector("#forecast-day-two");
var forecastTwoWind = forecastTwoWind.querySelector("#p-wind");
var forecastThreeWind = document.querySelector("#forecast-day-three");
var forecastThreeWind = forecastThreeWind.querySelector("#p-wind");
var forecastFourWind = document.querySelector("#forecast-day-four");
var forecastFourWind = forecastFourWind.querySelector("#p-wind");
var forecastFiveWind = document.querySelector("#forecast-day-five");
var forecastFiveWind = forecastFiveWind.querySelector("#p-wind");

var forecastOneHumidity = document.querySelector("#forecast-day-one");
var forecastOneHumidity = forecastOneHumidity.querySelector("#p-humidity");
var forecastTwoHumidity = document.querySelector("#forecast-day-two");
var forecastTwoHumidity = forecastTwoHumidity.querySelector("#p-humidity");
var forecastThreeHumidity = document.querySelector("#forecast-day-three");
var forecastThreeHumidity = forecastThreeHumidity.querySelector("#p-humidity");
var forecastFourHumidity = document.querySelector("#forecast-day-four");
var forecastFourHumidity = forecastFourHumidity.querySelector("#p-humidity");
var forecastFiveHumidity = document.querySelector("#forecast-day-five");
var forecastFiveHumidity = forecastFiveHumidity.querySelector("#p-humidity");



function renderWeather() {
  var city = cityData[0].name;
  var currentWeatherDate = fetchData.list[0].dt_txt.substring(0,10);
    var currentYear = currentWeatherDate.substring(0,4);
    var currentMonth = currentWeatherDate.substring(5,7);
    var currentDay = currentWeatherDate.substring(8,10);
  var currentWeatherTemp = Math.round(fetchData.list[0].main.temp * 10) / 10;
  var currentWeatherWind = fetchData.list[0].wind.speed;
  var currentWeatherHumidity = fetchData.list[0].main.humidity;

  h1CurrentCityEl.textContent = city + ' ' + currentMonth + "/" + currentDay + "/" + currentYear;
  currentTempEl.innerHTML = "Temp: " + currentWeatherTemp + "\u00b0F";
  currentWindEl.textContent = "Wind: " + currentWeatherWind + "mph";
  currentHumidityEl.textContent = "Humidity: " + currentWeatherHumidity + "%";

  var displayDates = [];
  var weatherInds = [];
  var temps = [];
  var winds = [];
  var humids = [];

  for (var i = 0; i < fetchData.list.length; i++) {

    var listDateTime = fetchData.list[i].dt_txt;
    var weathInd1 = fetchData.list[i].weather[0].icon;
    var listDate = fetchData.list[i].dt_txt.substring(0,10);
      var year1 = listDate.substring(0,4);
      var month1 = listDate.substring(5,7);
      var day1 = listDate.substring(8,10);
      var displayDate = month1 + "/" + day1 + "/" + year1;
    var temp1 = Math.round(fetchData.list[i].main.temp * 10) / 10;
    var wind1 = Math.round(fetchData.list[i].wind.speed * 10) / 10;
    var humid1 = fetchData.list[i].main.humidity;

    if (listDate>currentWeatherDate && listDateTime.substring(listDateTime.length - 8)=='15:00:00') {

      displayDates.push(displayDate);
      weatherInds.push(weathInd1);
      temps.push(temp1);
      winds.push(wind1);
      humids.push(humid1);

      forecastOneDate.textContent = displayDates[0];
      forecastTwoDate.textContent = displayDates[1];
      forecastThreeDate.textContent = displayDates[2];
      forecastFourDate.textContent = displayDates[3];
      forecastFiveDate.textContent = displayDates[4];

      console.log(weatherInds);

      forecastOneInd.src = "./assets/images/weatherIcons/" + weatherInds[0] + ".png";
      forecastTwoInd.src = "./assets/images/weatherIcons/" + weatherInds[1] + ".png";
      forecastThreeInd.src = "./assets/images/weatherIcons/" + weatherInds[2] + ".png";
      forecastFourInd.src = "./assets/images/weatherIcons/" + weatherInds[3] + ".png";
      forecastFiveInd.src = "./assets/images/weatherIcons/" + weatherInds[4] + ".png";
      
      forecastOneTemp.textContent = "Temp: " + temps[0] + "\u00b0F";
      forecastTwoTemp.textContent = "Temp: " + temps[1] + "\u00b0F";
      forecastThreeTemp.textContent = "Temp: " + temps[2] + "\u00b0F";
      forecastFourTemp.textContent = "Temp: " + temps[3] + "\u00b0F";
      forecastFiveTemp.textContent = "Temp: " + temps[4] + "\u00b0F";

      forecastOneWind.textContent = "Wind: " + winds[0] + "mph";
      forecastTwoWind.textContent = "Wind: " + winds[1] + "mph";
      forecastThreeWind.textContent = "Wind: " + winds[2] + "mph";
      forecastFourWind.textContent = "Wind: " + winds[3] + "mph";
      forecastFiveWind.textContent = "Wind: " + winds[4] + "mph";

      forecastOneHumidity.textContent = "Humidity: " + humids[0] + "%";
      forecastTwoHumidity.textContent = "Humidity: " + humids[1] + "%";
      forecastThreeHumidity.textContent = "Humidity: " + humids[2] + "%";
      forecastFourHumidity.textContent = "Humidity: " + humids[3] + "%";
      forecastFiveHumidity.textContent = "Humidity: " + humids[4] + "%";
                    
    }
  }
}