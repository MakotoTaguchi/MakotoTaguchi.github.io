$(".openbtn").click(function () {
    $(this).toggleClass('active');
});

$('.slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});

// $('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
//     $('.slider').slick('slickPlay');
// });