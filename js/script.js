$(document).ready(function(){
    $(".owl-carousel").owlCarousel({ 
        loop: true,
        margin: 60,
        autoWidth: true,
        responsive:{
            1400:{
                items:6
            },
            1000: {
                items: 4
            }, 
            600: {
                items: 3
            },

            400: {
                items: 2
            }
        }
    });
  });