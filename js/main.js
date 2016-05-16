$(document).ready(function(){
  // Add scrollspy to <body>
  $('#my_scrollspy').scrollspy({
    offset: $('header').innerHeight() + 30
  });   

  // Add smooth scrolling on all links inside the navbar
  $("header a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - $('header').innerHeight()
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= $('header').innerHeight()) {
      $("header").addClass("white");
    } else {
      $("header").removeClass("white");
    }
  });

  $('header .menu-link').click(function(){
    $('#home_menu').removeClass('in');
  });

});