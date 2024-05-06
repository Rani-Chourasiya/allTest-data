// work slider

$(document).ready(function () {
    $('.work-slider').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        smartSpeed: 2000,
        responsive: {

            0: {
                items: 2,
                margin: 10,
            },
            480: {
                items: 3,
                margin: 15,
            },
            768: {
                items: 4,
                margin: 25,
            },
            992: {
                items: 5,
                margin: 30,
            },
            1280: {
                items: 5,
                margin: 45,
            },
        },
    })

});

//   about slider

$(document).ready(function () {
    $('.about-slider').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        // autoplay: true,
        // autoplaySpeed:2000,
        // smartSpeed: 2000,
        center: true,
        responsive: {

            0: {
                items: 2,
                margin: 30,
            },
        },
    })

});

//   testimonial slider

$(document).ready(function () {
    $('.testimonial-slider').owlCarousel({
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 3000,
        smartSpeed: 2000,
        center: true,
        responsive: {

            0: {
                items: 1,
                margin: 15,
            },
            480: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 2,
                margin: 25,
            },
            992: {
                items: 3,
                margin: 30,
            },
            1280: {
                items: 4,
                margin: 45,
            },
        },
    })

});

// about-us crow slider

const prevIcon = '<i class="fa-solid fa-arrow-left"></i>'
const nextIcon = '<i class="fa-solid fa-arrow-right"></i>'
$(document).ready(function () {
    $('.crow-slider').owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        autoplaySpeed: 2000,
        smartSpeed: 3000,
        center: true,
        navText: [
            prevIcon,
            nextIcon,
        ],
        responsive: {

            0: {
                items: 1,
                margin: 15,
            },
            480: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 2,
                margin: 10,
            },
            992: {
                items: 3,
                margin: 30,
            },
            1280: {
                items: 3,
                margin: 20,
            },
        },
    })

});

// humburger active

$(".humburger").click(function () {
    $(".humburger-line1").toggleClass("active");
    $(".humburger-line2").toggleClass("active");
    $(".humburger-line3").toggleClass("active");
    $(".social-media").toggleClass("active");
    $(".menu").toggleClass("show");
    $("body").toggleClass("overflow");
});

