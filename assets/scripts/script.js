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
  mobileSettings: {
    showCloseIcon: true,
  },
  speed: 500,
});

lightGallery(document.getElementById("gallery-dispositivos"), {
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    showCloseIcon: true,
  },
  speed: 500,
});

lightGallery(document.getElementById("gallery-adaptacao"), {
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    showCloseIcon: true,
  },
  speed: 500,
});

lightGallery(document.getElementById("gallery-layout3D"), {
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    showCloseIcon: true,
  },
  speed: 500,
});

lightGallery(document.getElementById("gallery-NR12"), {
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    showCloseIcon: true,
  },
  speed: 500,
});

lightGallery(document.getElementById("gallery-projetos-gerais"), {
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    showCloseIcon: true,
  },
  speed: 500,
});

lightGallery(document.getElementById("gallery-atualizacao-e-reestruturacao"), {
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    showCloseIcon: true,
  },
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
function redirectToContact() {
  window.location.href = "../../contact.html";
}

//* share on whatsapp
function shareOnWhatsApp() {
  let message = "Conheça o site da Draw Criativa!!";
  let url = "https://www.drawcriativa.com.br";

  let fullMessage = `${message} ${url}`;
  let encodedMessage = encodeURIComponent(fullMessage);

  let finalLink = `https://api.whatsapp.com/send?text=${encodedMessage}`;

  window.open(finalLink, "_blank");
}
