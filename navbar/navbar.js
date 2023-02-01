const toggleBtn = document.querySelector("#navbar-toggle");
const menu = document.querySelector(".navbar-menu");

toggleBtn.addEventListener("click", function() {
  menu.classList.toggle("show");
  toggleBtn.classList.toggle("active");
});
