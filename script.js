"use strict";
// function for toggle

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// variable for the navbar
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});
navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

// go to top button
const goTopBtn = document.querySelector("[data-go-top]");

// scroll to the top of the page
window.addEventListener("scroll", function () {
  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
