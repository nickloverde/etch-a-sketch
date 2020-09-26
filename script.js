let resetButton = document.querySelector('#reset-btn');
let gridContainer = document.querySelector('#grid');

//Prompts user for grid size
function main(){
    let gridSize = prompt("Choose Grid Size: ", "24");
    createGrid(gridSize);
    resetButton.addEventListener('click', resetfunc);
}

// To create the grid
function createGrid(gridSize){
    for(let i = 0; i < gridSize * gridSize; i++){
        const newDiv = document.createElement('div');
        gridContainer.appendChild(newDiv);
        newDiv.classList.add('newGrid');
        newDiv.style.width = `${(1/gridSize)*100}%`;
        newDiv.style.height = newDiv.style.width;
        newDiv.addEventListener('mouseover', drawSketch);
    }
}

// Page reload
function resetfunc(){
    window.location.reload();
}

// Sketching with random color
function drawSketch(draw){
    draw.target.style.backgroundColor = randomColor();
}

// Random color function
function randomColor(){
    let r = Number(Math.floor(Math.random() * 256));
    let g = Number(Math.floor(Math.random() * 256));
    let b = Number(Math.floor(Math.random() * 256));
    let randomColor = "rgb("+r+","+g+","+b+")";
    return randomColor;
}

//Call function
main();