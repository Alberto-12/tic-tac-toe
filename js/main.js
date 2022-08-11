//let gridCells = document.querySelectorAll(".squares");

//function gridCellClickHandler() {
  //for (let i = 0; i < gridCells.length; i++) {
    //gridCells[i].classList.add("icon-x");
  //};
//}
//gridCells.addEventListener("click", gridCellClickHandler);

let gridCells = document.querySelector(".squares");

function gridCellClickHandler() {
  gridCells.classList.add("icon-x");
}

gridCells.addEventListener("click", gridCellClickHandler);

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

let squares = document.querySelectorAll(".squares");
 
for (let i = 0; i < squares.length; i++) {
squares[i].addEventListener("click", ); 
}

function squaresClickhandler() {

}






