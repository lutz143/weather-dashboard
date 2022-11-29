console.log("fetch up and ready");

var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=e03ebc5edf6a5fc04467ffe0e3c896b7';


// capture the value of the saved city in the sidebar if clicked
$(document).ready(function() {
  $("[data-id]").parent().click(function() {
    var test = $(this).children().data("id");
    console.log(test);
  });
});

function getApi() {
  fetch(requestUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
  
}

getApi();

// function init() {    
// }

// init();