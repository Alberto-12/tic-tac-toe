let gridCells = document.querySelector(".squares");

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let playerTurn = "icon-x";

function restartClickHandler() {
  modal.style.display = "block";
}

btn.addEventListener("click", restartClickHandler);

function nextRoundClickHandler() {
  modal.style.display = "none";
}

const nextRoundBtn = document.getElementById("next-round");

nextRoundBtn.addEventListener("click", nextRoundClickHandler);

let squares = document.querySelectorAll(".squares");
console.log(squares);

function squaresClickHandler(index) {
  squares[index].classList.add(playerTurn);

  if (playerTurn === "icon-x") {
    playerTurn = "icon-o";
  } else {
    playerTurn = "icon-x";
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function () {
    squaresClickHandler(i);
  });
}

const gameGridCells = {
  cell1: "",
  cell2: "",
  cell3: "",
  cell4: "",
  cell5: "",
  cell6: "",
  cell7: "",
  cell8: "",
  cell9: "",
};

if (
  gameGridCells.cell1 === "x" &&
  gameGridCells.cell2 === "x" &&
  gameGridCells.cell3 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell4 === "x" &&
  gameGridCells.cell5 === "x" &&
  gameGridCells.cell6 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell7 === "x" &&
  gameGridCells.cell8 === "x" &&
  gameGridCells.cell9 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell1 === "x" &&
  gameGridCells.cell4 === "x" &&
  gameGridCells.cell7 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell2 === "x" &&
  gameGridCells.cell5 === "x" &&
  gameGridCells.cell8 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell3 === "x" &&
  gameGridCells.cell6 === "x" &&
  gameGridCells.cell9 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell1 === "x" &&
  gameGridCells.cell5 === "x" &&
  gameGridCells.cell9 === "x"
) {
  alert("Player X wins!");
} else if (
  gameGridCells.cell3 === "x" &&
  gameGridCells.cell5 === "x" &&
  gameGridCells.cell7 === "x"
) {
  alert("Player X wins!");
}

console.log(gameGridCells);
