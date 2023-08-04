const btStart = document.querySelector(".start");
const btPause = document.querySelector(".pause");
const btReset = document.querySelector(".reset");
const btblink = document.querySelector(".container");
const unhide = document.querySelectorAll(".min");
const colon = document.querySelector(".colon");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".millisecond");

let min = (sec = msc = 0),
  startTimer;

btStart.addEventListener("click", () => {
  startTimer = setInterval(() => {
    msc++;
    if (msc == 59) {
      msc = 0;
      sec++;
    }
    if (sec == 60) {
      sec = 0;
      min++;
      unhide[0].classList.add("unhide");
      unhide[1].classList.add("unhide");
      colon.classList.add("unhide");
    }
    updateDisplay();
  }, 1);

  btStart.classList.add("startdsd");
  btPause.classList.remove("stopdsd");
  btblink.classList.add("blink");
  btStart.classList.add("deactive");
  btPause.classList.add("active");
  second.classList.remove("blink");
  milisecond.classList.remove("blink");
});

btPause.addEventListener("click", () => {
  clearInterval(startTimer);
  btStart.classList.remove("startdsd");
  btPause.classList.add("stopdsd");
  btblink.classList.remove("blink");
  btStart.classList.remove("deactive");
  btPause.classList.remove("active");
  second.classList.add("blink");
  milisecond.classList.add("blink");
});

btReset.addEventListener("click", () => {
  let hrs = (min = sec = msc = 0);
  clearInterval(startTimer);
  btStart.classList.remove("startdsd");
  btPause.classList.remove("stopdsd");
  btblink.classList.remove("blink");
  unhide[0].classList.remove("unhide");
  unhide[1].classList.remove("unhide");
  colon.classList.remove("unhide");
  btStart.classList.remove("deactive");
  btPause.classList.remove("active");
  second.classList.remove("blink");
  milisecond.classList.remove("blink");
  updateDisplay();
});

function updateDisplay() {
  pmin = min < 10 ? "0" + min : min;
  psec = sec < 10 ? "0" + sec : sec;
  pmsc = msc < 10 ? "0" + msc : msc;

  pmin = pmin.toString();
  psec = psec.toString();
  pmsc = pmsc.toString();

  document.querySelectorAll(".min")[0].innerText = pmin[0];
  document.querySelectorAll(".min")[1].innerText = pmin[1];
  document.querySelectorAll(".sec")[0].innerText = psec[0];
  document.querySelectorAll(".sec")[1].innerText = psec[1];
  document.querySelectorAll(".msc")[0].innerText = pmsc[0];
  document.querySelectorAll(".msc")[1].innerText = pmsc[1];
}
