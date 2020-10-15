"use strict";

$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  var elementTujuan = $(tujuan); // pindah scroll

  $("html, body").animate({
    scrolltop: elementTujuan.offset().top - 50
  }, 1250, 'swing');
  e.preventDefault();
});