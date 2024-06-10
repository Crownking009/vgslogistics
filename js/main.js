(function ($) {
    "use strict";
    
  
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
    });
    
})(jQuery);








// GET A QUOTE ON NAVBAR


document.addEventListener('DOMContentLoaded', function() {
  var getQuoteButton = document.getElementById('getQuoteButton');
  var formOverlay = document.getElementById('formOverlay');
  var personalInfoForm = document.getElementById('personalInfoForm');
  var addressForm = document.getElementById('addressForm');
  var closeButton = document.getElementById('closeButton');
  var nextButton = document.getElementById('nextButton');
  var submitButton = document.getElementById('submitButton');
  var thankYouMessage = document.getElementById('thankYouMessage');

  function disableBackgroundInteractions() {
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    var carousel = document.getElementById('carousel'); // Assuming there's an element with ID 'carousel'
    if (carousel) {
      carousel.style.pointerEvents = 'none'; // Disable interactions with the carousel
    }
  }

  function enableBackgroundInteractions() {
    document.body.style.overflow = ''; // Re-enable background scrolling
    var carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.style.pointerEvents = ''; // Re-enable interactions with the carousel
    }
  }

  if (getQuoteButton) {
    getQuoteButton.addEventListener('click', function() {
      if (formOverlay) {
        formOverlay.classList.remove('hidden'); // Show form overlay
        disableBackgroundInteractions(); // Disable interactions with background content
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener('click', function() {
      if (formOverlay) {
        formOverlay.classList.add('hidden'); // Hide form overlay
        enableBackgroundInteractions(); // Enable interactions with background content
      }
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', function(e) {
      e.preventDefault();

      if (personalInfoForm) {
        const inputs = personalInfoForm.querySelectorAll('input[required]');
        let formValid = true;

        inputs.forEach(input => {
          if (input.value.trim() === '') {
            formValid = false;
            input.classList.add('error'); // Apply error style to empty required inputs
          } else {
            input.classList.remove('error');
          }
        });

        if (formValid) {
          if (personalInfoForm && addressForm) {
            personalInfoForm.classList.remove('active'); // Hide current form section
            addressForm.classList.add('active'); // Show next form section
          }
        }
      }
    });
  }

  if (submitButton) {
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();

      if (addressForm) {
        const inputs = addressForm.querySelectorAll('input[required], input[type="date"], input[type="time"]');
        let formValid = true;

        inputs.forEach(input => {
          if (input.value.trim() === '') {
            formValid = false;
            input.classList.add('error'); // Apply error style to empty required inputs
          } else {
            input.classList.remove('error');
          }
        });

        if (formValid) {
          if (formOverlay && thankYouMessage) {
            formOverlay.classList.add('hidden'); // Hide form overlay
            thankYouMessage.classList.remove('initially-hidden'); // Show thank you message
            enableBackgroundInteractions(); // Enable interactions with background content
          }
        }
      }
    });
  }
});






// Get the current page URL active
document.addEventListener("DOMContentLoaded", function() {
  // Get the current page pathname
  var currentPath = window.location.pathname;

  // Get all links in the navbar
  var links = document.querySelectorAll('.navbar-nav .nav-link');

  // Loop through each link and check if its pathname matches the current path
  links.forEach(function(link) {
      var linkPath = new URL(link.href).pathname;
      console.log("Link Path: ", linkPath);
      console.log("Current Path: ", currentPath);
      if (currentPath === linkPath) {
          // If it matches, add the 'active' class to the link
          link.classList.add('active');
      }
  });
});


// carousel list quote












