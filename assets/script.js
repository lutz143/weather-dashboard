console.log('up and ready');

$(document).ready(function() {
  $("#search-button").on("click", function(){
    console.log('side bar button clicked!');
    var searchBarEl = document.querySelector('.hide');
    if (searchBarEl.style.display = "none"){
      console.log('should show');
      searchBarEl.removeAttribute("class", "hide");
      searchBarEl.setAttribute("style", "display: flex");
    } else if (searchBarEl.style.display = null) {
      searchBarEl.setAttribute("style", "display: none");
    }

  })
})

// $(document).ready(function() {
//   $("#search-button").on("click", function(){
//     console.log('side bar button clicked!');
//     var searchBarEl = document.querySelector('.search-bar');
//     if (searchBarEl.style.display = "none") {
//       searchBarEl.style.display = "flex";
//     } else {
//       searchBarEl.style.display = "none";
//     }
//   })
// })


// function showSearchBar() {
//   var searchBarEl = document.getElementById("search-bar");
//   if (searchBarEl.style.display === "none") {
//     searchBarEl.style.display = "block";
//   } else {
//     searchBarEl.style.display = "none";
//   }
// }