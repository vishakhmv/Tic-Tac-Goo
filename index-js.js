let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let xoro = document.querySelector(".x-or-o");
let bq = [];
let gameOver = false;
let w = new Audio("sounds/winner.mp3");


xoro.classList.add("orange");

let turnX = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnX = true;
  enableBoxes();
  bq = [];
  gameOver = false;
  document.querySelector(".turn").innerText = "Turn of";
  xoro.innerText = "X";
  if (resetBtn.innerText === "New Game") {
    resetBtn.innerText = "Reset Game";
  }

  if (xoro.classList.contains("white")) {
    xoro.classList.remove("white");
    xoro.classList.add("orange");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver || box.innerText !== "") {
      return;
    }
    if (turnX) {
      box.classList.add("orange");
      box.innerText = "X";
      turnX = false;
      xoro.innerText = "O";
      xoro.classList.remove("orange");
      xoro.classList.add("white");
    } else {
      box.classList.add("white");
      box.innerText = "O";
      turnX = true;
      xoro.innerText = "X";
      xoro.classList.remove("white");
      xoro.classList.add("orange");
    }
    bq.push(box);
    box.disabled = true;
    if (gameOver) {
      return;
    }
    if (bq.length > 6) {
      let bqp = bq.shift();
      bqp.innerText = "";
      bqp.disabled = false;
      bqp.classList.remove("white", "orange");
      bqp.classList.remove("red");
    }
    if (bq.length > 5) {
      let bqf = bq[0];
      bqf.classList.add("red");
    }
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("white", "orange", "red");
  }
};

const showWinner = (winner) => {
  gameOver = true;
  document.querySelector(".turn").innerText = "Winner is : ";
  xoro.innerText = winner;
  w.play();
  if (winner === "X") {
    if (xoro.classList.contains("white")) {
      xoro.classList.remove("white");
      xoro.classList.add("orange");
    }
  } else {
    if (xoro.classList.contains("orange")) {
      xoro.classList.remove("orange");
      xoro.classList.add("white");
    }
  }

  disableBoxes();
  resetBtn.innerText = "New Game";
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return;
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
