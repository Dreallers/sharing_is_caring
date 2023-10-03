const menuHamburger = document.querySelector(".menu-hamburger");
const containerNavBar = document.querySelector(".container-nav-bar");

menuHamburger.addEventListener("click", () => {
  containerNavBar.classList.toggle("mobile-menu");
});
