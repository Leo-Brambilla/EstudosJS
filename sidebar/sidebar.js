const toggleButton = document.querySelector(".toggle-button");
const sidebar = document.querySelector(".sidebar");
toggleButton.addEventListener("click", function() {
    toggleButton.classList.toggle("change");
    sidebar.classList.toggle("show-sidebar")
})