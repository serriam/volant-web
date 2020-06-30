"use strict";

// aos fade in effects
AOS.init();

// init scrollax


// slick slider for front page
  

jQuery(document).ready(function($){
    $.Scrollax();
  });


function initVolant(){
  var V = $(".bg");

  V.each(function(n) {if ($(this).attr("data-bg")) {$(this).css("background-image", "url(" + $(this).data("bg") +")")}});
}  

$('.carousel').carousel({
  interval: 5000,
})

// $('.carousel').on('slid.bs.carousel', function (e){
//   $('.carousel').carousel(2)
// })

// $('.carousel').carousel(0)
// $('.carousel').carousel(1)
// $('.carousel').carousel(2)
// init owl carousel
