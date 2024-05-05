//-------------------------header-sticky-js-start--------------
$(window).scroll(function(){
    if ($(this).scrollTop() > 90) {
        $('header').addClass('sticky-header');
    } else {
        $('header').removeClass('sticky-header');
    }
});
//------------------------header-sticky-js-end------------------

//--------------------------toggle-btn-js------------------------
$(".navbar-toggler").click(function(){
$(this).toggleClass('navbar-closed');
$("html").toggleClass("myClass");
});
$("header li.dropdown .plus-icon").click(function(){
$(this).parent('header li.dropdown').find(".dropdown-menu").toggleClass('show');
});
//-----------------------toggle-btn-js------------------------

//-------------------------light-dart-theme-js-start-------------------------
$(document).ready(function(){
// on-click-change-btn-img/icon
$("header .light-dark").click(function(){
    $(this).toggleClass('black-show');
});
// on-click-change-btn-img/icon
// on-window-load not remove body-class-js 
var addClass = sessionStorage.getItem('addClass');
if(addClass == 'true') {
    $('body').addClass('theme-black');
    $('header .light-dark').addClass('black-show');
}
$('header .light-dark').click(function(){
    $('body').toggleClass('theme-black');  
    if(sessionStorage.getItem("addClass") == 'true'){
        sessionStorage.setItem('addClass', 'false');
    }
    else{
        sessionStorage.setItem('addClass', 'true');
    }      
});
 // on-window-load not remove body-class-js 
});
//---------------------------light-dart-theme-js-end------------------------

//------------change-logo-resize-window-js-start----------
$(document).ready(function(){
 if ($(window).width() < 991) {
        $('header .navbar-brand img').attr('src', 'assets/image/Pixler.png');
    } 
    else {
       $('header .navbar-brand img').attr('src', 'assets/image/pix-logo.svg');
    }
});
//------------change-logo-resize-window-js-end------------



//-----------------------owl-js-start--------------------
$('#logo_content').owlCarousel({
loop:true,
margin:20,
nav:false,
dots:false,
autoplay: true,
slideTransition: 'linear',
autoplayTimeout: 6000,
autoplaySpeed: 6000,
autoplayHoverPause:true,
responsive:{
    0:{
        items:2.3
    },
    600:{
        items:3.1
    },
    1000:{
        items:5
    },
    1400:{
        items:7
    }
}
});
var client = $('#client_content');
client.owlCarousel({
loop:true,
margin:16,
nav:false,
dots:false,
responsive:{       
    0:{
        items:1.4,
        center:true,
    },
    1000:{
        items:3
    }
}
});
client.on('mousewheel', '.owl-stage', function (e) {
if (e.originalEvent.wheelDelta > 0) {
    client.trigger('prev.owl');
} else {
    client.trigger('next.owl');
}
e.preventDefault();
});

var service = $('#service_content');
service.owlCarousel({
loop:false,
nav:true,
margin:30,
slideSpeed: 1000,
nav:false,
dots:false,
responsive:{
    0:{
        items:1.1,
        margin:20,
    },
    600:{
        items:2.1
    }, 
    900:{
        items:3
    },          
    1200:{
        items:3.5
    },
    1440:{
       items:4,
    },
    1600:{
        items:5
    }
}
});
service.on('mousewheel', '.owl-stage', function (e) {
if (e.originalEvent.wheelDelta > 0) {
    service.trigger('prev.owl');
} else {
    service.trigger('next.owl');
}
e.preventDefault();
});

var corevalue = $('#core-content');
corevalue.owlCarousel({
loop:true,
nav:true,
margin:30,
slideSpeed: 1000,
nav:false,
dots:false,
responsive:{
    0:{
        items:1.1,
        margin:20,
    },
    600:{
        items:2.1
    }, 
    900:{
        items:3
    },          
    1200:{
        items:3.5
    },
    1440:{
       items:4,
    },
    1600:{
        items:5
    }
}
});
corevalue.on('mousewheel', '.owl-stage', function (e) {
if (e.originalEvent.wheelDelta > 0) {
    corevalue.trigger('prev.owl');
} else {
    corevalue.trigger('next.owl');
}
e.preventDefault();
});

var abiltybox = $('#ablity_box');
abiltybox.owlCarousel({
loop:false,
nav:true,
margin:20,
slideSpeed: 1000,
nav:false,
dots:false,
responsive:{
    0:{
        items:1.1
    },
    600:{
        items:2.1
    }, 
    900:{
        items:3
    },          
    1300:{
       items:4
    },
    1600:{
        items:5
    }
}
});
abiltybox.on('mousewheel', '.owl-stage', function (e) {
if (e.originalEvent.wheelDelta > 0) {
    abiltybox.trigger('prev.owl');
} else {
    abiltybox.trigger('next.owl');
}
e.preventDefault();
});

$('#work_carousel').owlCarousel({
items:3,
loop:true,
margin:15,
center:true,
nav:false,
dots:false,
responsive:{
    0:{
        items:1.2
    },
    600:{
        items:3.1
    },
}
});
$('#team_content').owlCarousel({
items:6,
loop:true,
margin:15,
nav:false,
dots:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
}
});
//-------------------owl-js-end------------------

//---------------------counter-js-start------------------
$('.counter').each(function() {
var $this = $(this),
  countTo = $this.attr('data-count');

$({ countNum: $this.text()}).animate({
countNum: countTo
},
{
duration: 1000,
easing:'linear',
step: function() {
  $this.text(Math.floor(this.countNum));
},
complete: function() {
  $this.text(this.countNum);
  //alert('finished');
}
}); 
});
//-----------------counter-js-end-----------------

//-------------------------clock-js-start---------------
var months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];
var days = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
];

$(document).ready(function() {
setclocks(true);
});

$(window).resize(function() {
$(".clockcontainer").each(function() {
var textscale = $(this).width() / 200;
$(".citylabel", this).css("font-size", textscale * 100 + "%");
$(".datelabel", this).css("font-size", textscale * 85 + "%");
});
});

// Update clock(s) (only) every second to spare system resources

var _cmpdate = new Date();

function setclocks(init) {
//  console.time("clocks");

var dt = new Date();

msec = dt.getMilliseconds();
diffmsec = msec % 1000;

if (!init)
if (dt.getSeconds() == _cmpdate.getSeconds()) {
  setTimeout("setclocks(false);", 1001 - diffmsec);
  //     console.timeEnd("clocks");
  return;
}
_cmpdate = dt;

$(".clockcontainer").each(function() {
if (init) {
  if (!(clocksize = $(this).attr("data-size"))) clocksize = "20vh";
  $(this)
    .css("width", clocksize)
    .css("height", clocksize);
  $(this).append(
    '<div class="clockcase"><div class="citylabel"></div><div class="datelabel"></div><div class="hourhand"></div><div class="secondhand"></div><div class="minutehand"></div><div class="centerwasher"></div></div>'
  );

  var textscale = $(this).width() / 200;
  $(".citylabel", this).css("font-size", textscale * 100 + "%");
  $(".datelabel", this).css("font-size", textscale * 85 + "%");
  for (var i = 0; i < 30; i++) {
    if (i % 5 == 0)
      $(".clockcase", this).append(
        '<div class="minutediv" style="transform: translate(-50%, 50%) rotate(' +
          6 * i +
          "deg)" +
          '"><div class="leftmark"></div><div class="rightmark"></div></div>'
      );
    else
      $(".clockcase", this).append(
        '<div class="minutediv" style="transform: translate(-50%, 50%) rotate(' +
          6 * i +
          "deg)" +
          '"><div class="minutedotleft"></div><div class="minutedotright"></div></div>'
      );
  }
}

if (!(timezone = $(this).attr("data-timezone"))) {
  // Get current timezone
  timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  $(this).attr("data-timezone", timezone);
}
$(".citylabel", this).html($(this).attr("data-city"));
var idt = new Date().toLocaleString("en-US", { timeZone: timezone });
dt = new Date(idt);

if (dt.getSeconds() == 0 || init) {
  datestr =
    days[dt.getDay()] +
    ", " +
    dt.getDate() +
    " " +
    months[dt.getMonth()] +
    " " +
    dt.getFullYear() +
    ", " +
    ("0" + dt.getHours()).slice(-2) +
    ":" +
    ("0" + dt.getMinutes()).slice(-2);
  //   $(".datelabel", this).html(datestr);
  $(this).attr("title", $(".citylabel", this).html() + " - " + datestr);
}
hr = dt.getHours();
min = dt.getMinutes();
sec = dt.getSeconds();

var hrDeg = -90 + hr * 30 + min * 30 / 60,
  minDeg = -90 + min * 6 + sec * 6 / 60,
  secDeg = -90 + sec * 6;

$(".hourhand", this).css("transform", "rotate(" + hrDeg + "deg)");
$(".minutehand", this).css("transform", "rotate(" + minDeg + "deg)");
$(".secondhand", this).css("transform", "rotate(" + secDeg + "deg)");
if (init) $(this).animate({ opacity: 1.0 }, 500);
});
setTimeout("setclocks(false);", 1001 - diffmsec);
//  console.timeEnd("clocks");
}
//--------------------clock-js-end--------------------


//---------------------------video-js-start------------------------
const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
if (video.paused || video.ended) {
    video.play();
} else {
    video.pause();
}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
circlePlayButton.style.opacity = 1;
});
//--------------------video-js-end-------------------------------

