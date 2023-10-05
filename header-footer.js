const menuHamburger = document.querySelector(".menu-hamburger");
const containerNavBar = document.querySelector(".container-nav-bar");


menuHamburger.addEventListener("click", () => {
  containerNavBar.classList.toggle("mobile-menu");
});

const menuElements = document.querySelectorAll(".menu");

for (let i=0; i < menuElements.length; i++){
menuElements[i].addEventListener("click", () => {
 containerNavBar.classList.remove("mobile-menu");
});
}

