$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");
    var $bottomSlide = null;
    var $bottomSlideContent = null;

    var mySwiper = new Swiper(".swiper-container", {
        spaceBetween: 30,
        slidesPerView: 3,
        centeredSlides: true,
        roundLengths: true,
        loop: true,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });
});

//장바구니 스와이퍼

var swiper2 = new Swiper(".swiper-container2", {
    pagination: ".swiper-pagination",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
});
