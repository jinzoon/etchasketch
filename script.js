//const numberOfSides = 16;
const gridContainer = document.querySelector(".gridContainer");
const newGridButton = document.querySelector(".newGridButton");

let requestedSides = 16;

drawGrid(requestedSides,gridContainer);

newGridButton.addEventListener("click",() => {
    requestedSides = Math.floor(prompt("What size grid would you like (max 100)", 16))
    while (requestedSides >100 || requestedSides < 1 ||  isNaN(requestedSides) ) {
        requestedSides = Math.floor(prompt("What size grid would you like (max 100)", 16));}
    
    gridContainer.replaceChildren("");
    drawGrid(requestedSides,gridContainer);

});









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

            newSubDiv.style.outline = "2px dotted rgb(15,56,15)"

            newDiv.appendChild(newSubDiv);
            newSubDiv.addEventListener("mouseenter", () => {
                if (!newSubDiv.classList.contains(".filledIn")){
                newSubDiv.style.background= "rgb(48,98,48)";}
                
                if (!newSubDiv.classList.contains(".filledIn")){
                    newSubDiv.style.opacity = ".1";
                
                 }
                 else if (newSubDiv.classList.contains(".filledIn")){
                    let tempOpacity = Number(newSubDiv.style.opacity);
                    if (tempOpacity < 1 ){
                        tempOpacity = tempOpacity + .1;
                        newSubDiv.style.opacity = tempOpacity.toString();
                    }
                 }
                newSubDiv.classList.add(".filledIn");
            });

            


        }
        
    }
}

