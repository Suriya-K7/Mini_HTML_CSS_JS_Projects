const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

box.addEventListener("click", () => {
  box.classList.add("active");
});
btn.addEventListener("click", () => {
  box.classList.toggle("active");
});
