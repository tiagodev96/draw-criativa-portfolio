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

//* LightGallery
lightGallery(document.getElementById("gallery-projetos-de-maquinas"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

lightGallery(document.getElementById("gallery-dispositivos"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

lightGallery(document.getElementById("gallery-adaptacao"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

lightGallery(document.getElementById("gallery-layout3D"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

lightGallery(document.getElementById("gallery-NR12"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

lightGallery(document.getElementById("gallery-projetos-gerais"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
});

lightGallery(document.getElementById("gallery-atualizacao-e-reestruturacao"), {
  plugins: [lgZoom, lgThumbnail],
  speed: 500,
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
    700: {
      slidesPerView: 3,
    },
  },
});

//* redirection function PAGE ABOUT (SOBRE)
function redirectToProjetoDeMaquinas() {
  window.location.href = "../index.html#projetos-de-maquinas";
}
function redirectToDispositivos() {
  window.location.href = "../index.html#dispositivos";
}
function redirectToAdaptacao() {
  window.location.href = "../index.html#adaptacao";
}
function redirectToLayout3D() {
  window.location.href = "../index.html#layout3D";
}
function redirectToNR12() {
  window.location.href = "../index.html#NR12";
}
function redirectToProjetosGerais() {
  window.location.href = "../index.html#projetos-gerais";
}
function redirectToAtualizacaoEReestruturacao() {
  window.location.href = "../index.html#atualizacao-e-reestruturacao";
}
