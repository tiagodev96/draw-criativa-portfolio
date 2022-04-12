const modals = document.querySelectorAll(".modal");

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function noScroll() {
  window.scrollTo(0, 0);
}

function closeModal() {
  for (let modal of modals) {
    modal.classList.add("hide");
  }
  window.removeEventListener("scroll", noScroll);
}

//* modal projetos de máquinas
const modalProjetoDeMaquinas = document.querySelector(
  "#modal-projeto-de-maquinas"
);

function openProjetoDeMaquinasModal() {
  modalProjetoDeMaquinas.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-projetos-maquinas", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".modal-projetos-maquinas2", {
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

//* modal dispositivos
const modalDispositivos = document.querySelector("#modal-dispositivos");

function openDispositivosModal() {
  modalDispositivos.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-dispositivos", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".modal-dispositivos2", {
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

//* modal adaptação
const modalAdaptacao = document.querySelector("#modal-adaptacao");

function openAdaptacaoModal() {
  modalAdaptacao.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-adaptacao", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".modal-adaptacao2", {
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

//* modal layout 3D
const modalLayout3D = document.querySelector("#modal-layout3d");

function openLayout3DModal() {
  modalLayout3D.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-layout3d", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".modal-layout3d2", {
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

//* modal NR12
const modalNR12 = document.querySelector("#modal-NR12");

function openNR12Modal() {
  modalNR12.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-NR12", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".modal-NR122", {
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
