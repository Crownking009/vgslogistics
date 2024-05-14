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

// document.getElementById("openQuoteModal").addEventListener("click", function() {
//     document.querySelector(".quoteModal").style.display = "block";
//   });
  
//   document.querySelector(".quoteModal .close").addEventListener("click", function() {
//     document.querySelector(".quoteModal").style.display = "none";
//   });
  
//   // Close the modal when clicking outside of it
//   window.addEventListener("click", function(event) {
//     if (event.target == document.querySelector(".quoteModal")) {
//       document.querySelector(".quoteModal").style.display = "none";
//     }
//   });








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
const getQuoteButton = document.getElementById('getQuoteButton');
const formContainer = document.getElementById('formContainer');
const forms = document.querySelectorAll('.form');
const nextButtons = document.querySelectorAll('.nextButton');
const submitButton = document.querySelector('.submitButton');
const thankYouMessage = document.getElementById('thankYouMessage');

getQuoteButton.addEventListener('click', function() {
  formContainer.style.display = 'block';
  forms[0].classList.add('active'); // Show the first form section initially
});





nextButtons.forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();

    console.log("Next button clicked");
    
    const currentForm = this.closest('.form');
    const nextForm = currentForm.nextElementSibling;

    console.log("Current form:", currentForm);
    console.log("Next form:", nextForm);

    currentForm.classList.remove('active');
    if (nextForm) {
      nextForm.classList.add('active');
      console.log("Next form added active class:", nextForm);
    }
  });
});


submitButton.addEventListener('click', function(e) {
  e.preventDefault();

  const currentForm = this.closest('.form');
  const inputs = currentForm.querySelectorAll('input[required]');
  let formValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      formValid = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (formValid) {
    formContainer.style.display = 'none';
    thankYouMessage.style.display = 'block';
  }
});























