const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".navMenu");

hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach(i =>i.addEventListener("click", ()=> {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));