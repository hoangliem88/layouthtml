//Search 
$(function() {
    $('.search-icon').click(function(event) {

        $('.top-search-input-wrap').attr('style', 'display:block');
        $('.search-close-icon').attr('style', 'display:block');
        $('.search-icon').attr('style', 'display:none');
    });
    $('.search-close-icon').click(function(event) {
        $('.top-search-input-wrap').removeAttr('style').attr('style', 'display:none');
        $('.search-close-icon').removeAttr('style').attr('style', 'display:none');
        $('.search-icon').removeAttr('style').attr('style', 'display:block');

    });
    $('.top-search-overlay').click(function(event) {
        $('.top-search-input-wrap').removeAttr('style').attr('style', 'display:none');
        $('.search-close-icon').removeAttr('style').attr('style', 'display:none');
        $('.search-icon').removeAttr('style').attr('style', 'display:block')
    });
});


$(function() {
  // Slideshow 4
      $(".rslides").responsiveSlides({
        auto: false,
        pager: false,
        nav: true,
        speed: 500,
        
      });
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 4,
                nav: false
            },
            1000: {
                items: 6,
                nav: false,
              
            }
        }
    })
});