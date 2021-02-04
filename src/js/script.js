$(document).ready(function(){
    const hamburgerBtn = document.querySelector('.hamburger-btn__burger'),
            menu = document.querySelector('.header__navigation');


    hamburgerBtn.addEventListener('click', () => {
        menu.classList.toggle('mobile-menu');
        hamburgerBtn.classList.toggle('open');
    })

    $('.friends__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prev-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/next-arrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]

    });


})(jQuery);