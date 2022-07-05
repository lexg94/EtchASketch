const container = document.getElementById("container");


var rows = 8;
var cols = 8;

container.innerHTML = "";


container.style.setProperty('--grid-rows',rows);
container.style.setProperty('--grid-cols',cols);

function makeGrid() {

    for (let i = 0; i < rows*cols; i++) {

        const divs = document.createElement("div");
        container.appendChild(divs).className = "grid-item";
    }
}

makeGrid();


const grids = document.querySelectorAll(".grid-item");
const reset = document.querySelector(".reset-btn");


grids.forEach((grid) => {

    grid.addEventListener('mouseover', function(e) {

        e.target.style.backgroundColor = "red";           
    });

    reset.addEventListener('click', () => {
        grid.style.backgroundColor = "white";
    });
});









