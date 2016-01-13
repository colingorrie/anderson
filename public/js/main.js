(function($){
  $(document).ready(function() {

    $('body').scrollspy({
      target: '.navbar-inverse',
      offset: 50
    });

    $(document).on('click','.navbar-collapse.in',function(e) {
      if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
      }
    });

    $('a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      e.preventDefault();
    });

    /* ---------------------------------------------- /*
     * Background image
    /* ---------------------------------------------- */

    $("#splash").backstretch(["img/bg3.jpeg"]);

    /* ---------------------------------------------- /*
     * Navbar
    /* ---------------------------------------------- */

    var navbar = $('.navbar');
    var navHeight = navbar.height();

    $(window).scroll(function() {
      if($(this).scrollTop() >= navHeight) {
        navbar.addClass("is-navbar-floating");
        navbar.removeClass("is-navbar-docked");
      }
      else {
        navbar.addClass("is-navbar-docked");
        navbar.removeClass("is-navbar-floating");      }
    });

  });
})(jQuery);
