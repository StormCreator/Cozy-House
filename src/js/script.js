$(document).ready(function(){
    $('.friends__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/next-arrow.png"></button>',
    });
})(jQuery);