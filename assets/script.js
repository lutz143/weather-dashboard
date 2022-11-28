console.log('up and ready');
var sideBarEl = $(".sidebar");
var sideBarLinkEl = document.querySelector("#sidebar-link-city");
var searchBarEl = document.querySelector("#search-container");

var searchCities = [];
console.log(searchCities.length);
// console.log(sideBarLinkEl);



function renderCities(){  
  var cityNodeEl = document.createElement('div');   
  var cityNodeText = document.createElement('div');

  cityNodeEl.setAttribute('class', 'sidebar-link');
  cityNodeEl.setAttribute('id', 'sidebar-link-city'); 
  cityNodeText.setAttribute('id', 'saved-city')

  for (var i=0; i<searchCities.length; i++) {
    var searchCity = searchCities[i];
    
    console.log(searchCity);

    cityNodeText.textContent = searchCity;

    sideBarEl.append(cityNodeEl);
    cityNodeEl.append(cityNodeText);
  }

}

$("#search-button").on("click", function(){
  console.log('side bar button clicked!');
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
    console.log('enter button pressed!');
    
    searchCities.push(searchCity);     
    storeCities();
    renderCities();
    searchBarEl.value = "";
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
}

$(document).ready(function() {
  $(".search-icon").on("click", function(event){
    event.preventDefault();
    console.log('search button clicked!');
    var searchBarEl = document.querySelector('.search-bar');
    var searchCity = $(".search-bar").val();
    // var searchCityState = 'Ohio';
    searchCities.push(searchCity);
    storeCities();
    renderCities();
    // searchCities = [];
    searchBarEl.value = "";
  })
})

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedSearchCities = JSON.parse(localStorage.getItem("searchCities"));

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
    
    console.log(searchCity);

    cityNodeText.textContent = searchCity;

    sideBarEl.append(cityNodeEl);
    cityNodeEl.append(cityNodeText);
  }
}


function handleFormSubmit(event) {
  event.preventDefault();

  $(function () {
  });
}

init();