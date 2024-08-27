console.log("Hello World");

// create a grid of 16 by 16 div containers

const divSquares = document.getElementById("container");
const gridSizeBtn = document.getElementById("sizeChangeBtn");

let rows = 16;
let columns = 16;
let gridMargin = rows+columns;
let cellSize = 800;

// a function that randomizes the colors of the cells unsing math floor to round down and math random to create a random number
function r() {
    return Math.floor(Math.random() * 256);
}


// A function that creates the grid

function divCreator () {
  cellSize = 800/rows;
  let cellSizeStr = cellSize-2 + "px";
  console.log(cellSizeStr);
    for (let c=0;c<rows*columns;c++) {
          let color = "rgb(" + r() + "," + r() + "," + r() + ")";
          let cell = document.createElement("div");
          cell.setAttribute("class", "cell");
          cell.style.height =cellSizeStr;
          cell.style.width =cellSizeStr;       
          cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = color;}); 
        divSquares.appendChild(cell);
    }
};

// a function that listens for click and grid number data from the user

gridSizeBtn.addEventListener("click", ()=> {
  let gridNumber = parseInt(window.prompt("What is your desired number of cells per side?", "Enter a number between 1 and 100"));
  if (isNaN(gridNumber) || gridNumber <= 0 || gridNumber>100) {
    alert("You did not enter a number between 1 and 100");
  } else {
    document.querySelectorAll(".cell").forEach(cell => cell.remove());
    rows = gridNumber;
    columns = rows;
    divCreator();
  }
});

divCreator();