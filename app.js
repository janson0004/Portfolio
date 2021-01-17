const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".nav-lists");

hamburger.addEventListener("click", () => {
    list.classList.toggle("open");
    
})
new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
  });