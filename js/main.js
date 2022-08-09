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
