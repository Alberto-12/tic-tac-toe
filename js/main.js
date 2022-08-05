let gridCells = document.querySelector(".squares");
function gridCellClickHandler() {
  gridCells.classList.add("icon-x");
}
gridCells.addEventListener("click", gridCellClickHandler);
