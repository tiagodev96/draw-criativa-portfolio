const modalProjetoDeMaquinas = document.querySelector(
  "#modal-projeto-de-maquinas"
);

const modals = document.querySelectorAll(".modal");

function openProjetoDeMaquinasModal() {
  modalProjetoDeMaquinas.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

function noScroll() {
  window.scrollTo(0, 0);
}

function closeModal() {
  for (let modal of modals) {
    modal.classList.add("hide");
  }
  window.removeEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-swipper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".modal-swipper2", {
  loop: true,
  lazy: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
