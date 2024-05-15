(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
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






// get a quote button



  document.getElementById("openQuoteModalMobile").addEventListener("click", function() {
    document.getElementById("quoteModal").style.display = "block";
  });
  
  document.getElementById("openQuoteModalDesktop").addEventListener("click", function() {
    document.getElementById("quoteModal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("quoteModal").style.display = "none";
  });
  
  // Close the modal when clicking outside of it
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("quoteModal")) {
      document.getElementById("quoteModal").style.display = "none";
    }
  });
  


// GET A QUOTE ON CAROUSEL


// Functionality for "Get A Quote" button
document.getElementById('getQuoteButton').addEventListener('click', function() {
  document.getElementById('formOverlay').classList.remove('hidden'); // Show form overlay
});

// Functionality for closing the form overlay
document.getElementById('closeButton').addEventListener('click', function() {
  document.getElementById('formOverlay').classList.add('hidden'); // Hide form overlay
});

// Functionality for Next button in the form
document.getElementById('nextButton').addEventListener('click', function(e) {
  e.preventDefault();
  
  const inputs = document.querySelectorAll('#personalInfoForm input[required]');
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
    document.getElementById('personalInfoForm').classList.remove('active'); // Hide current form section
    document.getElementById('addressForm').classList.add('active'); // Show next form section
  }
});

// Functionality for Submit button in the form
document.getElementById('submitButton').addEventListener('click', function(e) {
  e.preventDefault();
  
  const inputs = document.querySelectorAll('#addressForm input[required], #addressForm input[type="date"], #addressForm input[type="time"]');
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
    document.getElementById('formOverlay').classList.add('hidden'); // Hide form overlay
    document.getElementById('thankYouMessage').classList.remove('hidden'); // Show thank you message
  }
});






// CAROUSEL SERVICES BUTTON
//  // Get references to the buttons and quote backgrounds
// var button1 = document.getElementById("getQuoteButton1");
// var button2 = document.getElementById("getQuoteButton2");
// var button3 = document.getElementById("getQuoteButton3");
// var quoteList1 = document.getElementById("quoteList1");
// var quoteList2 = document.getElementById("quoteList2");
// var quoteList3 = document.getElementById("quoteList3");

// // Add event listeners to each button for mouseover and mouseout events
// button1.addEventListener("mouseover", function() {
//   quoteList1.querySelector(".quote-background").style.display = "block";
// });
// button1.addEventListener("mouseout", function() {
//   quoteList1.querySelector(".quote-background").style.display = "none";
// });

// button2.addEventListener("mouseover", function() {
//   quoteList2.querySelector(".quote-background").style.display = "block";
// });
// button2.addEventListener("mouseout", function() {
//   quoteList2.querySelector(".quote-background").style.display = "none";
// });

// button3.addEventListener("mouseover", function() {
//   quoteList3.querySelector(".quote-background").style.display = "block";
// });
// button3.addEventListener("mouseout", function() {
//   quoteList3.querySelector(".quote-background").style.display = "none";
// });
