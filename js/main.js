$(document).ready(function() {
    // navbar Shink-------------------
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }


    });



    // features carousol --------------------------
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    });


    //Testimonals carousol --------------------------
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        // autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    });
    //Perload carousol --------------------------
    $(window).on("load", function() {
        $(".preloader").fadeOut("slow");

    });
});