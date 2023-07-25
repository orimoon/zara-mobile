$(document).ready(function () {
    // Assign some jquery elements we'll need
    var $swiper = $(".swiper-container");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

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

// $(document).ready(function () {
//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".section-history",
//             start: "top center",
//             pin: true,
//             end: "'bottom center",
//             scrub: 1,
//             invalidateOnRefresh: true,
//         },
//         defaults: {
//             ease: "power2.out",
//         },
//     });
// });

// var tl = gsap.timeline();

// tl.set(".sec-contents", {
//     width: "768",
//     height: "559",
// });

// tl.to(".sec-contents", {
//     scale: 1.5,
//     width: "100%",
//     height: "100vh",
// });

// ScrollTrigger.matchMedia({

// "(min-width:821px)" : function(){

//     var bS02Timeline = gsap.timeline({
//         scrollTrigger : {
//             trigger : "._b-s02",
//             start : "top top",
//             pin : true,
//             end : "150%",
//             scrub : 1,
//             invalidateOnRefresh : true
//         },
//         defaults : {
//             ease: "power2.out"
//         }
//     });
//         bS02Timeline
//             .set("._b-s02 .txtImg .img",{
//                 width: "640",
//                 height: "323"
//             })
//             .set('._b-s02 .txtImg h2:nth-of-type(1)',{
//                 x : "-20.833vw"
//             })
//             .set('._b-s02 .txtImg h2:nth-of-type(2)',{
//                 x: "20.833vw"
//             })
//             .to('._b-s02 .txtImg .img',{
//                 width : "100vw",
//                 height : "100vh",
//             },"my")
//             .to('._b-s02 .txtImg h2:nth-of-type(1)',{
//                 x : 0
//             },"my")
//             .to('._b-s02 .txtImg h2:nth-of-type(2)',{
//                 x: 0
//             },"my"
