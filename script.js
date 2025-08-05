const numberOfSides = 16;
const gridContainer = document.querySelector(".gridContainer");
drawGrid(numberOfSides,gridContainer);



function drawGrid(numberOfSides, gridContainer) {
    for (let i = 0; i < numberOfSides; i++) {
        const newDiv = document.createElement("div");
        
        gridContainer.appendChild(newDiv);
        
    }
}

