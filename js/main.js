let gridCells = document.querySelector(".squares");

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let playerTurn = "icon-x";

function restartClickHandler() {
  modal.style.display = "block";
}

let squares = document.querySelectorAll(".squares");
 
for (let i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", ); 
}

function squaresClickhandler() {

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
  alert("Player O wins!");
} else if (
  gameGridCells.cell3 === "x" &&
  gameGridCells.cell5 === "x" &&
  gameGridCells.cell7 === "x"
) {
  alert("Player O wins!");
} else if (
    gameGridCells.cell1 === "o" &&
    gameGridCells.cell2 === "o" &&
    gameGridCells.cell3 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell4 === "o" &&
    gameGridCells.cell5 === "o" &&
    gameGridCells.cell6 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell7 === "o" &&
    gameGridCells.cell8 === "o" &&
    gameGridCells.cell9 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell1 === "o" &&
    gameGridCells.cell4 === "o" &&
    gameGridCells.cell7 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell2 === "o" &&
    gameGridCells.cell5 === "o" &&
    gameGridCells.cell8 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell3 === "o" &&
    gameGridCells.cell6 === "o" &&
    gameGridCells.cell9 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell1 === "o" &&
    gameGridCells.cell5 === "o" &&
    gameGridCells.cell9 === "o"
  ) {
    alert("Player O wins!");
  } else if (
    gameGridCells.cell3 === "o" &&
    gameGridCells.cell5 === "o" &&
    gameGridCells.cell7 === "o"
  ) {
    alert("Player O wins!");
} else if (
    gameGridCells.cell1 != "" &&
    gameGridCells.cell2 != "" &&
    gameGridCells.cell3 != "" &&
    gameGridCells.cell4 != "" &&
    gameGridCells.cell5 != "" &&
    gameGridCells.cell6 != "" &&
    gameGridCells.cell7 != "" &&
    gameGridCells.cell8 != "" &&
    gameGridCells.cell9 != ""  
) {

    alert("it's a TIE!");
  }


  console.log(gameGridCells);
