$(window).ready(function($) {
  "use strict";

  // Smooth Scrolling
  var navbarMenu = $("#mynavbar")
  navbarMenu.localScroll();

  if ($(window).width() >= 1024) {

    var serviceItem1 = $(".service-item:first-child");
    var serviceItem2 = $(".service-item:nth-child(2)");
    var serviceItem3 = $(".service-item:last-child");
    var misc = $("#misc-section");

    var animationName = "animated bounceIn";
    var animationEnds = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

    serviceItem1.css("opacity","0");
    serviceItem2.css("opacity","0");
    serviceItem3.css("opacity","0");

    $(window).scroll(function() {
      var wScroll = $(window).scrollTop();

      // Navbar Setting
      if (wScroll > 768) {
        $(".navbar-default").css("background","#242424");
        $(".navbar-brand").css("height","60px");
        $(".navbar-nav").css("transform","translateY(10%)");
      } else {
        $(".navbar-default").css("background","transparent");
        $(".navbar-brand").css("height","80px");
        $(".navbar-nav").css("transform","translateY(25%)");
      }

      // Service Item Animation
      if ( wScroll >= serviceItem1.offset().top - 260 ) {
        serviceItem1.addClass(animationName);
      }

      if ( wScroll >= serviceItem2.offset().top - 260 ) {
        serviceItem2.addClass(animationName);
      }

      if ( wScroll >= serviceItem3.offset().top - 260 ) {
        serviceItem3.addClass(animationName);
      }

      if (wScroll >= misc.offset().top - 300) {
        $(".misc-item").addClass(animationName);
      }

    });
  }

});
