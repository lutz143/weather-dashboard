console.log("fetch up and ready");

// capture the value of the saved city in the sidebar if clicked
$(document).ready(function() {
  $("[data-id]").parent().click(function() {
    var test = $(this).children().data("id");
    console.log(test);
  });
});
