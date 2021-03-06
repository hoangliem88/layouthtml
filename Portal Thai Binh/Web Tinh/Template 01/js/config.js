$(document).ready(function() {
    $('.owl-new-hot').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    })
});

$(document).ready(function() {
    $('.single-video-box').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    })
});

$(document).ready(function() {
    $('.single-gallery-box').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: true
            }
        }
    })
});



$(document).ready(function() {
    $('.scrollbar-inner').scrollbar();
});


 //Menu hover pc
 $(function() {
     // will only process code within delay(function() { ... }) every 100ms.

     $(window).resize(function() {

         var width = $(window).width();
         if (width >= 768) {

             $('li.dropmenu').hover(function() {
                 $(this).addClass('active');
                 $(this).find('ul').addClass('animation-menuhv');
                 /* Stuff to do when the mouse enters the element */
             }, function() {
                 $(this).removeClass('active');
                 $(this).find('ul').removeClass('animation-menuhv')
                 /* Stuff to do when the mouse leaves the element */
             });
         }
     });

     $(window).resize();
 });

 //Menu mobile
 $(function() {
     jQuery('.nav-menu').meanmenu();
 });