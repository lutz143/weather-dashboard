console.log('up and ready');

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

$(document).ready(function() {
  $(".search-icon").on("click", function(event){
    event.preventDefault();
    console.log('search button clicked!');
    var searchCity = $(".search-bar").val();
    var searchCityState = 'Ohio';
    console.log(searchCity);
    // var task = $(this).siblings('#taskDescription').val();

    localStorage.setItem(searchCity, searchCityState);    
  })
})

$(document).ready(function() {
  $("#clear-button").on("click", function(){
    localStorage.clear();
    location.reload();
  })
})


function handleFormSubmit(event) {
  event.preventDefault();

  $(function () {
  });
}