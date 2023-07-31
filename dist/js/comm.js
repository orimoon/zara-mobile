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

gsap.registerPlugin(ScrollTrigger);

gsap.to(".txt-left", {
    x: 0,
    scrollTrigger: {
        trigger: ".sec-contents",
        scrub: true,
    },
});
gsap.to(".txt-right", {
    x: 0,
    scrollTrigger: {
        markers: true,
        trigger: ".sec-contents",
        scrub: true,
    },
});
gsap.to(".sec-contents img", {
    scale: 5,
    scrollTrigger: {
        markers: true,
        trigger: ".sec-contents",
        scrub: true,
    },
});

var swiper2 = new Swiper(".swiper-container2", {
    pagination: ".swiper-pagination",
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
});
