const rootElement = document.getElementById("menu-wrapper");
const menu = MenuHamburger.initialize({
  rootElement,
  size: 30,
  backgroundColor: "#f8f9fa",
});
const dropmenu = document.querySelector("#dropdownmenu");

menu.on("toggle", () => {
  dropmenu.classList.toggle("active");
});

/* SWIPER */
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});
