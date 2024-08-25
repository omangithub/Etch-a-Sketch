console.log("Hello World");

// create a grid of 16 by 16 div containers

const divSquares = document.getElementById("container");


console.log(divSquares)

const rows = 16;
const columns = 16;

/* function divCreator () {
    for (let c=0;c<rows;c++) {
        let row = document.createElement("div")
        row.setAttribute("class", "rows");
        for (let i=0;i<columns;i++) {
          let cell = document.createElement("div");
          cell.setAttribute("class", "cell");
          cell.style.width = "25px";
          cell.style.height = "25px";
          cell.style.display = "inline-block";
          row.appendChild(cell);
        }
        divSquares.appendChild(row);
    }

}*/

 function divCreator () {
    for (let c=0;c<rows*columns;c++) {
          let cell = document.createElement("div");
          cell.setAttribute("class", "cell");
        divSquares.appendChild(cell);
    }
};

divCreator();