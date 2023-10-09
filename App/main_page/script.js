// Scroll Hide Navigation-----------------------------------------------------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  document.getElementById("scrolled").style.top = "0";
    } else {
    document.getElementById("scrolled").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});