const menuBtns = document.querySelectorAll("#menu-btn");

menuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("#left-menu").classList.toggle("show");
    });
});