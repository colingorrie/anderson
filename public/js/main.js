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

    // static background image

    // var backgroundImage = "img/bg3.jpg";

    // $("#splash").backstretch(backgroundImage);

    // cycle between background images

    var backgroundImages = ["img/bg3.jpg", "img/bg1.jpg", "img/bg4.jpg"];
    var cyclingDuration = 5000;  // duration between transitions, in milliseconds
    var cyclingFade = 1000;  // duration of fade effect, in milliseconds

    $("#splash").backstretch(backgroundImages,
      {
        duration: cyclingDuration,
        fade: cyclingFade
      }
    );

    // Floating navbar

    var navbar = $(".navbar");
    var navbarHeight = navbar.height();
    var navbarCollaspedMaxWidth = 767;

    $(window).scroll(function() {
      if($(this).scrollTop() >= navbarHeight) {
        navbar.addClass("is-navbar-floating");
        navbar.removeClass("is-navbar-docked");
      }
      else {
        navbar.addClass("is-navbar-docked");
        navbar.removeClass("is-navbar-floating");
      }
    });

    // Get collapse class onto navbar root div manually

    if ($(window).width() <= navbarCollaspedMaxWidth) {
      navbar.addClass("is-navbar-collapsed");
    }

    $(window).resize(function() {
      if ($(this).width() <= navbarCollaspedMaxWidth) {
        navbar.addClass("is-navbar-collapsed");
      }
      else {
        navbar.removeClass("is-navbar-collapsed");
      }
    });

    // Portfolio popups

    $(".section-portfolio").magnificPopup({
      alignTop: true,
      callbacks: {
        buildControls: function() {
          this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
        }
      },
      delegate: "a.popup-link",
      fixedBgPos: true,
      fixedContentPos: true,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        titleSrc: function(item) {
          return "<h4 class='popup-title'>" + item.el.attr("title") +
          "</h4><p class='popup-description'>" + item.el.data("description") + "</p>";
        },
        tError: "The image could not be loaded.",
        verticalFit: true
      },
      type: "image"
    });

  });

})(jQuery);
