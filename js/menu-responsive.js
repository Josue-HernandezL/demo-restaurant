const menu = document.querySelector(".cerrar-barras");
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", (e) => {
  if (e.target.matches(".hamburger")) {
    menu.classList.toggle("active");
    if (hamburger.dataset.active === "false") {
      hamburger.style.color = "#fff";
      hamburger.dataset.active = "true";
    } else {
      hamburger.style.color = "#000";
      hamburger.dataset.active = "false";
    }
  }
});