/* global $*/
$(function(){
  $(".jquery").on("click", function(){
    $(this).css("color", "red");
  });
  $(".jquery").mouseout(function(){
    $(".jquery").css("color", "#000");
  });
});

$(function(){
  $("#theTarget").skippr({
    transition: "slide",
    speed: 1000,
    easing: "easeOutQuart",
    navType: "bubble",
    childrenElementType: "div",
    arrows: true,
    autoPlay: true,
    autoPlayDuration: 3000,
    keyboardOnAlways: true,
    hidePrevious: false,
  });
});