let menuBar = document.querySelector(".menu_bar");
let sidenav = document.getElementById("sidenav");
let enrolled = document.querySelector(".enrolled");
let sidenavHidden = document.querySelector(".sidenav_class_sec_hidden");

menuBar.addEventListener("click", function () {
  sidenav.classList.toggle("closed_nav");
});

enrolled.addEventListener("click", function () {
  sidenavHidden.classList.toggle("nav_elem_hidden");
});
