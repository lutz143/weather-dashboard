console.log("fetch up and ready");
const h1CurrentCityEl = document.getElementById("h1-current-city");
const today = dayjs().format('dddd, MMMM D, YYYY');
const today2 = dayjs()


const apiKey = "e03ebc5edf6a5fc04467ffe0e3c896b7";
var searchLocationRoot = 'http://api.openweathermap.org/geo/1.0/direct?q='
var requestUrlRoot = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
// var requestUrlRoot = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.0288&lon=77.6253&appid=e03ebc5edf6a5fc04467ffe0e3c896b7';


function getLocation() {
  // capture the value of the saved city in the sidebar if clicked
  $(document).ready(function() {
    $("[data-id]").parent().click(function() {
      var selectedCity = $(this).children().data("id");
      selectedCity = selectedCity.replace(" ", "").trim();
      console.log(selectedCity);

      var searchLocationUrl = searchLocationRoot + selectedCity + '&limit=1&appid=' + apiKey;
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


        function getApi() {
          var requestUrl = requestUrlRoot + lat + '&lon=' + lon + '&appid=' + apiKey
          
          
          fetch(requestUrl)
            .then(function(response){
              return response.json();
            })
            .then(function(data) {
              console.log(data);
        
              var city = data.city.name;
              var currentWeatherDateTime = data.list[0].dt_txt;
              var currentWeatherDate = data.list[0].dt_txt.substring(0,10);
              var currentWeatherTemp = data.list[0].main.temp;
              var currentWeatherWind = data.list[0].wind.speed;
              var currentWeatherHumidity = data.list[0].main.humidity;
              console.log("City: " + city);
              console.log("DateTime: " + currentWeatherDateTime);
              console.log("Date: " + currentWeatherDate);
              console.log("Temp: " + currentWeatherTemp);
              console.log("Wind speed: " + currentWeatherWind);
              console.log("Humidity: " + currentWeatherHumidity);
        
              h1CurrentCityEl.textContent = city + ' ' + currentWeatherDate;
              var dates = []
        
              for (var i = 0; i < data.list.length; i++) {
            
                var listDateTime = data.list[i].dt_txt;
                var listDate = data.list[i].dt_txt.substring(0,10);    
        
                if (listDate>currentWeatherDate && listDateTime.substring(listDateTime.length - 8)=='12:00:00') {
                  dates.push(1);
                  console.log(listDateTime);
                  console.log(dates.length);
        
                  if (dates.length < 5) {
                    console.log('not enough forecast days');
                  }
        
                }
        
        
              //   h1CurrentCityEl.textContent = "Test";
              //   // urlLink.textContent = data[i].url;
              //   // urlLink.setAttribute('href', data[i].url);
              //   // urlLink.setAttribute('target', '_blank');
        
              //   // userContainer.append(userName);
              //   // userContainer.append(url);
              //   // url.append(urlLink);
              }
            })   
        } 
        })
        getApi();





      })

      
    });
  };

getLocation();







// getApi();

function init() {    
}

init();