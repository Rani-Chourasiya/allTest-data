$('.owl-banner-left').owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
})

$('.owl-banner-right').owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  animateOut: 'slideOutDown',
  animateIn: 'slideInDown',
})


const prevIcon = '<i class="arrow left"></i>'
const nextIcon = '<i class="arrow right"></i>'
$('.beauty-slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  slideSpeed: 400,
  navText: [
    prevIcon,
    nextIcon,
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    800: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: true
    }
  }
})

// $("").hover(function(){
//   $('.email-form-fixed').addClass("show");
// });

// $(".cancel-icon").click(function () {
//   $(".email-form-fixed").removeClass("show");
// });

$(document).ready(function () {
  $(".eye1").click(function () {
    $(".size-up1").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up1").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up1").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye-2").click(function () {
    $(".size-up2").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up2").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up2").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye3").click(function () {
    $(".size-up3").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up3").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up3").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye4").click(function () {
    $(".size-up4").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up4").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up4").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye5").click(function () {
    $(".size-up5").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up5").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up5").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye6").click(function () {
    $(".size-up6").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up6").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up6").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye7").click(function () {
    $(".size-up7").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up7").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up7").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".eye8").click(function () {
    $(".size-up8").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
    $(".overlay").css({ "opacity": "1", "visibility": "visible" });
    $("body").css({ "overflow": "hidden" });
  });

  $(".x-icon").click(function () {
    $(".size-up8").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });

  $(".overlay").click(function () {
    $(".size-up8").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
    $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
    $("body").css({ "overflow": "auto" });
  });
});

jQuery(document).ready(($) => {
  $('.quantity').on('click', '.plus', function (e) {
    let $input = $(this).prev('input.qty');
    let val = parseInt($input.val());
    $input.val(val + 1).change();
  });

  $('.quantity').on('click', '.minus',
    function (e) {
      let $input = $(this).next('input.qty');
      var val = parseInt($input.val());
      if (val > 0) {
        $input.val(val - 1).change();
      }
    });
});

$(".video-btn").click(function () {
  $(".video-video").css({ "opacity": "1", "visibility": "visible", "top": "50%" });
  $(".overlay-black").css({ "opacity": "1", "visibility": "visible" });
  $("body").css({ "overflow": "hidden" });
});


$(".overlay-black").click(function () {
  $(".video-video").css({ "opacity": "0", "visibility": "hidden", "top": "60%" });
  $(".overlay").css({ "opacity": "0", "visibility": "hidden" });
  $("body").css({ "overflow": "auto" });
});

$(".toggle-btn").click(function () {
  $("nav").toggleClass("show-nav");
  $("body").toggleClass("overflow-hidden");
});

$(".search-btn").click(function () {
  $(".search").css({ "opacity": "1", "visibility": "visible" });
});

$(".search-close").click(function (){
  $(".search").css({ "opacity": "0", "visibility": "hidden" })
})


