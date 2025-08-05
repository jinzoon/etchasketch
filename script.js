const numberOfSides = 16;
const gridContainer = document.querySelector(".gridContainer");
drawGrid(numberOfSides,gridContainer);



function drawGrid(numberOfSides, gridContainer) {
    for (let i = 0; i < numberOfSides; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.flexGrow = "1";
        newDiv.id = "Row_"+i;
        newDiv.style.display = "flex";
        gridContainer.appendChild(newDiv);
        for (let x = 0; x < numberOfSides; x++) {
            const newSubDiv = document.createElement("div");
            newSubDiv.style.flexGrow = "1";
            newSubDiv.id = i+","+x;
            newDiv.appendChild(newSubDiv);
        }
        
    }
}

