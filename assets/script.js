console.log('up and ready');
var sideBarEl = $(".sidebar");
var searchCities = [];

function renderCities(){
  for (var i=0; i<searchCities.length; i++) {
    var searchCity = searchCities[i];

    var cityNodeEl = document.createElement('div');
    cityNodeEl.setAttribute('class', 'sidebar-link');
    var cityNodeText = document.createElement('div');
    cityNodeText.textContent = searchCity;

    sideBarEl.append(cityNodeEl);
    cityNodeEl.append(cityNodeText);
  }
}

// render cities to the text area from localStorage
$('#sidebar-link').val(localStorage.getItem('Salem'));

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
  }
})

function storeCities() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("searchCities", JSON.stringify(searchCities));
}

$(document).ready(function() {
  $(".search-icon").on("click", function(event){
    event.preventDefault();
    console.log('search button clicked!');
    var searchCity = $(".search-bar").val();
    // var searchCityState = 'Ohio';
    searchCities.push(searchCity);

    // localStorage.setItem(searchCity, searchCityState);

    // var cityNodeEl = document.createElement('div');
    // cityNodeEl.setAttribute('class', 'sidebar-link');
    // var cityNodeText = document.createElement('div');
    // cityNodeText.textContent = searchCity;

    // sideBarEl.append(cityNodeEl);
    // cityNodeEl.append(cityNodeText);
    storeCities();
    renderCities();
  })
})

$(document).ready(function() {
  $("#clear-button").on("click", function(){
    localStorage.clear();
    location.reload();
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

  // This is a helper function that will render todos to the DOM
  renderCities();
}


function handleFormSubmit(event) {
  event.preventDefault();

  $(function () {
  });
}

init();