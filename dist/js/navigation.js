const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const navbar = document.querySelector(".navigation");

const navLinks = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

const closeMenu = () => {
  hamburger.classList.remove("open");
  navbar.classList.remove("open");
  showMenu = false;
};

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    navbar.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    navbar.classList.remove("open");

    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);
navLinks.forEach((el) => el.addEventListener("click", closeMenu));
