const imageall = document.querySelectorAll(".img-box");
const modal = document.querySelector(".modal");
const modalImg = modal.querySelector("img");
const innerCircle = document.querySelectorAll(".inner");
imageall.forEach((image) => {
  image.addEventListener("click", function () {
    let imgSrc = this.querySelector("img").src;
    modal.classList.toggle("active");
    let Newimg = document.createElement("img");
    Newimg.src = imgSrc;
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.appendChild(Newimg);
    innerCircle.forEach((all) => {
      all.classList.add("active");
    });
    imageall.forEach((allimg) => {
      allimg.classList.remove("active");
    });
    image.classList.add("active");
  });
});
