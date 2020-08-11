$(document).ready(function() {
  $("span.dark-span").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });
});

$(document).ready(function() {
  $("span.light-span").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });
});

$(document).ready(function() {
  $("button#dark-button").click(function() {
    $(".dark-span").toggle();
    $(".light-span").toggle();
  });
});

$(document).ready(function() {
  $("span.dark-span").click(function() {
    $("#dark-button").removeClass("btn-dark");
    $("#dark-button").addClass("btn-light");
  });
});

$(document).ready(function() {
  $("span.light-span").click(function() {
    $("#dark-button").removeClass("btn-light");
    $("#dark-button").addClass("btn-dark");
  });
});