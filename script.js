const container = document.getElementById("grid-container");
const input = document.getElementById("val");


input.addEventListener("change", () => {
    rows = input.value;
    cols = input.value;

    // test for out of bound values
    if(rows > 100 || rows < 1) {
        alert('Illegal value entered, please input a number between 1 and 100');
    }
    else {
        changeGrid();
    }
});

// make default 8x8 grid


function makeGrid() {

    container.style.setProperty('--grid-rows',8);
    container.style.setProperty('--grid-cols',8);

    for (let i = 0; i < 64; i++) {

        const divs = document.createElement("div");
        container.appendChild(divs).className = "grid-item";
    }

    changeBackground();
}

//update grid dimensions based on user input

function changeGrid() {

    container.innerHTML = "";

    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);

    for (let i = 0; i < rows * cols; i++) {

        const divs = document.createElement("div");
        container.appendChild(divs).className = "grid-item";
    }

    changeBackground();

}

// change background color of square

function changeBackground() {

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
}

makeGrid();












