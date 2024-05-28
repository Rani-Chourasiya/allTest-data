const prevIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="wow fadeInRight" data-wow-duration="1.5s" width="15" height="28" viewBox="0 0 15 28" fill="none"><path d="M13 26.5494L2.89503 16.4445C1.70166 15.2511 1.70166 13.2983 2.89503 12.105L13 2" stroke="#292D32" stroke-width="2.32475" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
const nextIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="wow fadeInLeft" data-wow-duration="1.5s" width="15" height="28" viewBox="0 0 15 28" fill="none"><path d="M2 1.45059L12.105 11.5555C13.2983 12.7489 13.2983 14.7017 12.105 15.895L2 26" stroke="#292D32" stroke-width="2.32475" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>'
$('.ev-bike').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 5000,
  animateOut: "fadeOut",
  animateIn: "slideInRight",
})

wow = new WOW(
  {
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    navText: [
      prevIcon,
      nextIcon,
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      }
    }
  });
});