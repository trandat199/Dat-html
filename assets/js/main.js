var toggle = document.querySelector(".toggle");
var sidebar = document.querySelector(".nav__menu");
var navItems = document.querySelectorAll(".nav__link");
var closes = document.querySelector(".close");
toggle.addEventListener("click", function () {
  sidebar.classList.toggle("action");
});

closes.addEventListener("click", function () {
  sidebar.classList.toggle("action");
});

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    sidebar.classList.toggle("action");
  });
}
