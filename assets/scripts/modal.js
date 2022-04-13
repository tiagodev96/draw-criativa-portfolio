const modals = document.querySelectorAll(".modal");

//* modal elements
const modalProjetoDeMaquinas = document.querySelector(
  "#modal-projeto-de-maquinas"
);
const modalDispositivos = document.querySelector("#modal-dispositivos");
const modalAdaptacao = document.querySelector("#modal-adaptacao");
const modalLayout3D = document.querySelector("#modal-layout3d");
const modalNR12 = document.querySelector("#modal-NR12");
const modalProjetosGerais = document.querySelector("#modal-projetos-gerais");
const modalAtualizacaoEReestruturacao = document.querySelector(
  "#modal-atualizacao-reestruturacao"
);

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

//* modal Projetos Gerais
function openProjetosGeraisModal() {
  modalProjetosGerais.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-projetos-gerais", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".modal-projetos-gerais2", {
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

//* modal Atualização e Reestruturação de Projetos Antigos
function openAtualizacaoEReestruturacaoModal() {
  modalAtualizacaoEReestruturacao.classList.remove("hide");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
}

var swiper = new Swiper(".modal-atualizacao-reestruturacao", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".modal-atualizacao-reestruturacao2", {
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
