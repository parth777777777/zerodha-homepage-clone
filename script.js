console.log("JS connected!");

const menuBtn = document.getElementById("menu_btn");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
})