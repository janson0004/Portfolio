const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".nav-lists");

hamburger.addEventListener("click", () => {
    list.classList.toggle("open");
    
})