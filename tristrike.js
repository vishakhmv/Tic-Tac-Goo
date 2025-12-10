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
  [1, 2, 3],
  [2, 3, 4],
  [5, 6, 7],
  [6, 7, 8],
  [7, 8, 9],
  [10, 11, 12],
  [11, 12, 13],
  [12, 13, 14],
  [15, 16, 17],
  [16, 17, 18],
  [17, 18, 19],
  [20, 21, 22],
  [21, 22, 23],
  [22, 23, 24],
  [0, 5, 10],
  [5, 10, 15],
  [10, 15, 20],
  [1, 6, 11],
  [6, 11, 16],
  [11, 16, 21],
  [2, 7, 12],
  [7, 12, 17],
  [12, 17, 22],
  [3, 8, 13],
  [8, 13, 18],
  [13, 18, 23],
  [4, 9, 14],
  [9, 14, 19],
  [14, 19, 24],
  [0, 6, 12],
  [6, 12, 18],
  [12, 18, 24],
  [1, 7, 13],
  [7, 13, 19],
  [5, 11, 17],
  [11, 17, 23],
  [2, 8, 14],
  [10, 16, 22],
  [4, 8, 12],
  [8, 12, 16],
  [12, 16, 20],
  [3, 7, 11],
  [7, 11, 15],
  [9, 13, 17],
  [13, 17, 21],
  [2, 6, 10],
  [14, 18, 22],
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
    checkWinner();
    if (gameOver) {
      return;
    }
    if (bq.length > 22) {
      let bqp = bq.shift();
      bqp.innerText = "";
      bqp.disabled = false;
      bqp.classList.remove("white", "orange");
      bqp.classList.remove("red");
    }
    if (bq.length > 21) {
      let bqf = bq[0];
      bqf.classList.add("red");
    }
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
