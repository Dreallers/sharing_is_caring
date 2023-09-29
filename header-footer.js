const menuHamburger = document.querySelector(".menu-hamburger");
const navBar = document.querySelector(".container-menu");

menuHamburger.addEventListener("click", () => {
  navBar.classList.toggle("mobile-menu");
});
