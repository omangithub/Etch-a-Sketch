console.log("Hello World");

// create a grid of 16 by 16 div containers

const divSquares = document.getElementById("container");
const gridSizeBtn = document.getElementById("sizeChangeBtn");


console.log(divSquares)

let rows = 16;
let columns = 16;

 function divCreator () {
    for (let c=0;c<rows*columns;c++) {
          let cell = document.createElement("div");
          cell.setAttribute("class", "cell");
          cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "red";});
        divSquares.appendChild(cell);
    }
};

divCreator();

function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

gridSizeBtn.addEventListener("click", ()=> {
  let gridNumber = parseInt(window.prompt("What is your desired number of cells per side?", "Enter a number"));
  console.log(typeof(gridNumber));
  console.log(gridNumber);
  if (isNaN(gridNumber) || gridNumber === 0) {
    console.log("fail");
  } else {
    console.log("pass");
  }
})