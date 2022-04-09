const button = document.querySelector(".send-button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const phone = "5571993553196";
  let nameInput = document.querySelector("#name").value;
  let textInput = document.querySelector("#message").value;

  let fullMessage = `Olá, meu nome é ${nameInput}. ${textInput}`;
  let encodedMessage = encodeURIComponent(fullMessage);

  let whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
  window.open(whatsappLink, "_blank");
});
