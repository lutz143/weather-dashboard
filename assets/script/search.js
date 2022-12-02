var sideBarEl = $(".sidebar");
var sideBarLinkEl = document.querySelector("#sidebar-link-city");
var searchBarEl = document.querySelector("#search-container");

var searchCities = [];

function renderCities(){  
  var cityNodeEl = document.createElement('div');   
  var cityNodeText = document.createElement('div');

  cityNodeEl.setAttribute('class', 'sidebar-link');
  cityNodeEl.setAttribute('id', 'sidebar-link-city'); 
  cityNodeText.setAttribute('id', 'saved-city')
  cityNodeText.setAttribute('data-id', searchCity)

  for (var i=0; i<searchCities.length; i++) {
    var searchCity = searchCities[i];
    cityNodeText.textContent = searchCity;

    sideBarEl.append(cityNodeEl);
    cityNodeEl.append(cityNodeText);
  }

}

$("#search-button").on("click", function(){
  var searchBarEl = document.querySelector('.search-bar');
  var hideEl = document.querySelector('.hide');

  if(searchBarEl.style.display !=="none") {
    searchBarEl.style.display = "none";
    hideEl.style.display = "none";
  } else {
    searchBarEl.style.display = "block";
    hideEl.style.display = "flex";
    searchBarEl.focus();
  }
})

searchBarEl.addEventListener("keypress", function(event) {
  var sideBarLinkEl = document.querySelector("#sidebar-link-city");

  if(event.key == 'Enter') {
    var searchBarEl = document.querySelector('.search-bar');
    var searchCity = $(".search-bar").val();

    if (searchCity === ''){
      return;
    }
    
    searchCities.push(searchCity);
    selectedCity = searchCity;
    selectedCity = selectedCity.replace(" ", "").trim();
    storeCities();
    renderCities();
    searchBarEl.value = "";

    // getWeather();
    location.reload();
  }
})

$(document).ready(function() {
  $("#clear-button").on("click", function(){
    localStorage.clear();
    location.reload();
  })
})

function storeCities() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("searchCities", JSON.stringify(searchCities));
  localStorage.setItem("selectedCity", JSON.stringify(selectedCity));

}

$(document).ready(function() {
  $(".search-icon").on("click", function(){
    var searchBarEl = document.querySelector('.search-bar');
    var searchCity = $(".search-bar").val();
    // var searchCityState = 'Ohio';
    searchCities.push(searchCity);
    selectedCity = searchCity;
    selectedCity = selectedCity.replace(" ", "").trim();
    storeCities();
    renderCities();
    searchBarEl.value = "";
    
    // getWeather();
    location.reload();
  })
})

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedSearchCities = JSON.parse(localStorage.getItem("searchCities"));
  selectedCity = JSON.parse(localStorage.getItem("selectedCity"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedSearchCities !== null) {
    searchCities = storedSearchCities;
  }

  for (var i=0; i<searchCities.length; i++) {
    var searchCity = searchCities[i];
    var cityNodeEl = document.createElement('div');   
    var cityNodeText = document.createElement('div');
  
    cityNodeEl.setAttribute('class', 'sidebar-link');
    cityNodeEl.setAttribute('id', 'sidebar-link-city'); 
    cityNodeText.setAttribute('id', 'saved-city')
    cityNodeText.setAttribute('data-id', searchCity)

    cityNodeText.textContent = searchCity;

    sideBarEl.append(cityNodeEl);
    cityNodeEl.append(cityNodeText);    
  }  
}


init();