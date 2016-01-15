(function($){
  $(document).ready(function() {

    $("body").scrollspy({
      target: ".navbar-inverse",
      offset: 50
    });

    $(document).on("click", ".navbar-collapse.in", function(e) {
      if( $(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle" ) {
        $(this).collapse("hide");
      }
    });

    $("a[href*=#]").bind("click", function(e) {
      var anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $(anchor.attr("href")).offset().top
      }, 1000);

      e.preventDefault();
    });

    // Backstretch

    $("#splash").backstretch(["img/bg3.jpg"]);

    // Floating navbar

    var navbar = $('.navbar');
    var navHeight = navbar.height();

    $(window).scroll(function() {
      if($(this).scrollTop() >= navHeight) {
        navbar.addClass("is-navbar-floating");
        navbar.removeClass("is-navbar-docked");
      }
      else {
        navbar.addClass("is-navbar-docked");
        navbar.removeClass("is-navbar-floating");
      }
    });

    // Popup

    // $(".popup-link").magnificPopup({
    //   type: "image"
    // });

    $(".section-portfolio").magnificPopup({
      delegate: "a.popup-link",
      type: "image",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        titleSrc: function(item) {
          return item.el.attr("title");
        },
        tError: "The image could not be loaded.",
        verticalFit: true
      }
    });


  });
})(jQuery);
