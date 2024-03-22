// owl slider-1 js start
jQuery(document).ready(function () {
    jQuery('.owl-carousel-1').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: true,
    });
});

// owl slider-1 js end
// owl slider js start
$(".spaces-gal.owl-carousel").owlCarousel({
    autoplay:true,
    slideSpeed: 9000,
    items: 1,
    autoHeight: true,
    loop: true,
    dots: true,
dotsData: true,
    nav: false,
    center: true,
    responsiveClass: true,
    smartSpeed: 400,
    margin: 30,
});
// owl slider js end
// owl slider-2 js start
$(document).ready(function(){
    var owl = $('.owlcarousel-slider-2');
    owl.owlCarousel({
      autoplay:true,
      loop:true,
      margin:10,
      nav:false,
      items: 1,
    });
    
    // Custom Button
    $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
      owl.trigger('prev.owl.carousel');
    });
    
  });
// owl slider-2 js end
// owl slider-3 js start
$(".image-slider1").owlCarousel({
    margin:10,
    loop:true,
    autoplay:true,
    nav:true,
    navText:["←","→"],
    responsive:{
          0:{
              items:1
          },
          600:{
              items:3.5,
              merge:true,
                                  
          },
          1000:{
              items:5
          }
    }
  });
// owl slider-3 js end

// owl slider-4 js start
$(function(){
    $('.owl-slider-4').owlCarousel({
      loop:true,
      nav:true,
      navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      navContainer: '.custom-container-fluid .custom-nav',
      // animateOut:'slideOutRight',
      // animateIn: 'flipInY',
      items:1,
      margin:0,
      autoplay: true,
      stagePadding:0,
      smartSpeed:450
    });
  });
  
  
// owl slider-4 js end

// owl slider-5 js start
// jQuery(document).ready(function() {
//     var sync1 = jQuery("#sync1");
//     var sync2 = jQuery("#sync2");
//     var slidesPerPage = 5; //globaly define number of elements per page
//     var syncedSecondary = true;

//     sync1
//       .owlCarousel({
//       items: 1,
//       slideSpeed: 3000,
//       nav: true,

//       //   animateOut: 'fadeOut',
//       animateIn: "fadeIn",
//       autoplayHoverPause: true,
//       autoplaySpeed: 1400, //過場速度
//       dots: false,
//       loop: true,
//       responsiveClass: true,
//       responsive: {
//         0: {
//           item: 1,
//           autoplay: false
//         },
//         600: {
//           items: 1,
//           autoplay: true
//         }
//       },
//       responsiveRefreshRate: 200,
//       navText: [
//         '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
//         '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
//       ]
//     })
//       .on("changed.owl.carousel", syncPosition);

//     sync2
//       .on("initialized.owl.carousel", function() {
//       sync2
//         .find(".owl-item")
//         .eq(0)
//         .addClass("current");
//     })
//       .owlCarousel({
//       items: slidesPerPage,
//       dots: true,
//       //   nav: true,
//       smartSpeed: 1000,
//       slideSpeed: 1000,
//       slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
//       responsiveRefreshRate: 100
//     })
//       .on("changed.owl.carousel", syncPosition2);

//     function syncPosition(el) {
//       //if you set loop to false, you have to restore this next line
//       //var current = el.item.index;

//       //if you disable loop you have to comment this block
//       var count = el.item.count - 1;
//       var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

//       if (current < 0) {
//         current = count;
//       }
//       if (current > count) {
//         current = 0;
//       }

//       //end block

//       sync2
//         .find(".owl-item")
//         .removeClass("current")
//         .eq(current)
//         .addClass("current");
//       var onscreen = sync2.find(".owl-item.active").length - 1;
//       var start = sync2
//       .find(".owl-item.active")
//       .first()
//       .index();
//       var end = sync2
//       .find(".owl-item.active")
//       .last()
//       .index();

//       if (current > end) {
//         sync2.data("owl.carousel").to(current, 100, true);
//       }
//       if (current < start) {
//         sync2.data("owl.carousel").to(current - onscreen, 100, true);
//       }
//     }

//     function syncPosition2(el) {
//       if (syncedSecondary) {
//         var number = el.item.index;
//         sync1.data("owl.carousel").to(number, 100, true);
//       }
//     }

//     sync2.on("click", ".owl-item", function(e) {
//       e.preventDefault();
//       var number = jQuery(this).index();
//       sync1.data("owl.carousel").to(number, 300, true);
//     });
//   });
// owl slider-5 js end

// owl slider-6 js start
// owl slider-6 js end


