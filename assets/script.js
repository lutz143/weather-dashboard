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

// $(document).ready(function() {
//   $("#search-button").on("click", function(){
//     console.log('side bar button clicked!');
//     var searchBarEl = document.querySelector('.search-bar');
//     var hideEl = document.querySelector('.hide');

//     if(searchBarEl.style.display !=="none") {
//       searchBarEl.style.display = "none";
//       hideEl.style.display = "none";
//     } else {
//       searchBarEl.style.display = "block";
//       hideEl.style.display = "flex";
//     }
//   })
// })

function handleFormSubmit(event) {
  event.preventDefault();

  $(function () {
  });
}