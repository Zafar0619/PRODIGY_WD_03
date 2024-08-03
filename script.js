const gameBoard = document.querySelector(".game-board");
const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");

let currentPlayer = "X";
let gameStatus = "ongoing";
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameStatus === "ongoing" && cell.textContent === "") {
      cell.textContent = currentPlayer;
      checkWinningCondition();
      switchPlayer();
    }
  });
});

resetBtn.addEventListener("click", resetGame);

function checkWinningCondition() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (
      cells[combination[0]].textContent === currentPlayer &&
      cells[combination[1]].textContent === currentPlayer &&
      cells[combination[2]].textContent === currentPlayer
    ) {
      gameStatus = "won";
      alert(`Player ${currentPlayer} wins!`);
      break;
    }
  }
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function resetGame() {
  gameStatus = "ongoing";
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}
