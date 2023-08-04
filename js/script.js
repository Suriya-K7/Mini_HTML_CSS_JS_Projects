const boxes = document.querySelectorAll(".box");
const statusTxt = document.querySelector(".status");
const restartBtn = document.querySelector("#restart");
let x = `<img src="./images/X.png" class="animation"/>`;
let o = `<img src="./images/O.png" class="animation"/>`;

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentplayer = x;
let player = "X";
let options = ["", "", "", "", "", "", "", "", ""];

let running = false;
init();

function init() {
  boxes.forEach((box) => {
    box.addEventListener("click", boxClick);
  });
  running = true;
  restartBtn.addEventListener("click", gameReset);
  statusTxt.textContent = `${player} your turn !`;
}

function boxClick() {
  const index = this.dataset.index;
  if (options[index] != "" || !running) {
    return;
  }
  updateBox(this, index);
  checkwinner();
}

function updateBox(box, index) {
  options[index] = player;
  box.innerHTML = currentplayer;
}

function checkwinner() {
  let isWon = false;
  for (i = 0; i < win.length; i++) {
    const condition = win[i];
    const box1 = options[condition[0]];
    const box2 = options[condition[1]];
    const box3 = options[condition[2]];
    if (box1 == "" || box2 == "" || box3 == "") {
      continue;
    }
    if (box1 == box2 && box2 == box3) {
      isWon = true;
      boxes[condition[0]].classList.add("win");
      boxes[condition[1]].classList.add("win");
      boxes[condition[2]].classList.add("win");
    }
  }
  if (isWon) {
    statusTxt.textContent = `${player} won !`;
    statusTxt.classList.add("txtanime");
    running = false;
  } else if (!options.includes("")) {
    statusTxt.textContent = `Game Draw !!`;
    running = false;
  } else {
    changePlayer();
  }
}

function changePlayer() {
  player = player == "X" ? "O" : "X";
  currentplayer = currentplayer === x ? o : x;
  statusTxt.textContent = `${player} your turn !`;
}

function gameReset() {
  currentplayer = x;
  player = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  running = true;
  statusTxt.textContent = `start the game!`;
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("win");
  });
  statusTxt.classList.remove("txtanime");
}
