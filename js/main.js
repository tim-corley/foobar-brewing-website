// SELECT DOM ITEMS
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const beerItems = document.querySelectorAll(".beer");

// SET INITIAL STATE
let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);

const addCopyright = () => {
  const div = document.createElement("div");
  const currentYear = new Date().getFullYear();
  div.innerText = `© ${currentYear} Tim Corley`;
  const element = document.querySelector(".footer");
  element.appendChild(div);
};

const triggerItems = () => {
  beerItems.forEach((item) => item.classList.add("show"));
};

document.addEventListener("DOMContentLoaded", addCopyright);
document.addEventListener("DOMContentLoaded", triggerItems);
