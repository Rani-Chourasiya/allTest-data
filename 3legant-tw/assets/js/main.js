const prevIcon = ' <img src="./assets/images/arrow-left.png" alt="arrow-left" class="arrow-left">'
const nextIcon = ' <img src="./assets/images/arrow-left.png" alt="arrow-right" class="arrow-right">'
$('.banner-slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  animateOut: "slideOutDown",
  // animateIn: "slideInDown",
  navText: [
    prevIcon,
    nextIcon,
  ],
  responsive: {
    0: {
      nav: false,
      dots: false,
    },
    768: {
      nav: true,
      dots: true,
    },
    1000: {
      items: 1
    }
  }
})

$('.product-slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2
    },
    524: {
      items: 2
    },
    768: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

// responsive nav barr show

$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".responsive-navbar").css({ "width": "300px" });
    $("body").css({ "overflow": "hidden" });
    $(".overlay").css({ "display": "block", "opacity": "1" });
  });
  $(".x-icon").click(function () {
    $(".responsive-navbar").css({ "width": "0px" });
    $("body").css({ "overflow": "auto" });
    $(".overlay").css({ "display": "none", "opacity": "0" });
  });
  $(".overlay").click(function () {
    $(".responsive-navbar").css({ "width": "0px" });
    $("body").css({ "overflow": "auto" });
    $(".overlay").css({ "display": "none", "opacity": "0" });
    $(".cart-slide").removeClass("show-cart");
  });
});

// cart show

$(document).ready(function () {
  $(".bag-icon").click(function () {
    $(".cart-slide").addClass("show-cart");
    $("body").css({ "overflow": "hidden" });
    $(".overlay").css({ "display": "block", "opacity": "1" });
  });
});

// cart count increase
var itemCount = 0;

$('.add-item-btn').click(function () {
  itemCount++;
  $('#itemCount').html(itemCount);
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.bottom-header').addClass("sticky");
  }
  else {
    $('.bottom-header').removeClass("sticky");
  }
});

$('#filter').on('change', function () {
  var selectedVal = $(this).val().trim().toLowerCase();
  $('.filterable-box').fadeOut();
  if (selectedVal == "all") {
    $('.filterable-box').fadeIn();
  } else {
    $('.filterable-box').each(function () {
      let arrVal = $(this).data("type").toLowerCase().split(',');
      if ($.inArray(selectedVal, arrVal) !== -1) {
        $(this).fadeIn();
      }
    })
  }
})

$(".sb-item img").click(function () {
  $(this).css({ "background-color": "rgba(232, 236, 239, 1)", "opacity": "1" });
});

// quantity increase

var QtyInput = (function () {
  var $qtyInputs = $(".qty-input");

  if (!$qtyInputs.length) {
    return;
  }

  var $inputs = $qtyInputs.find(".product-qty");
  var $countBtn = $qtyInputs.find(".qty-count");
  var qtyMin = parseInt($inputs.attr("min"));
  var qtyMax = parseInt($inputs.attr("max"));

  $inputs.change(function () {
    var $this = $(this);
    var $minusBtn = $this.siblings(".qty-count--minus");
    var $addBtn = $this.siblings(".qty-count--add");
    var qty = parseInt($this.val());

    if (isNaN(qty) || qty <= qtyMin) {
      $this.val(qtyMin);
      $minusBtn.attr("disabled", true);
    } else {
      $minusBtn.attr("disabled", false);

      if (qty >= qtyMax) {
        $this.val(qtyMax);
        $addBtn.attr('disabled', true);
      } else {
        $this.val(qty);
        $addBtn.attr('disabled', false);
      }
    }
  });
})
