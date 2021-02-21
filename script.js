startSketching();

function startSketching() {

    let gridSize = 20;

    const gridContainer = document.querySelector('.grid-container');
    const gridSizeInput = document.querySelector('.grid-size-input');

    gridSizeInput.addEventListener('change', () => {
        
        if (gridSizeInput.value > 100) {
            gridSizeInput.value = 100;
        } else if (gridSizeInput.value < 4) {
            gridSizeInput.value = 4;
        }

        generateGridTemplate(gridContainer, gridSizeInput.value)
        
        deleteDivGrid(gridContainer);

        insertDivGrid(gridContainer, gridSizeInput.value);

    });

    generateGridTemplate(gridContainer, gridSize);

    insertDivGrid(gridContainer, gridSize);
    
}

function generateGridTemplate(gridContainer, gridSize) {

    gridContainer.style.display =  'grid'; 
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

}

function regenerateGridTemplate(gridContainer, gridSizeInput) {

    let gridSize = gridSizeInput.value;


}

function insertDivGrid(gridContainer, gridSize) {

    for (let i = 1; i <= gridSize; i++) {

        for (let j = 1; j <= gridSize; j++) {

            let div = document.createElement('div');
            div.style.gridArea = `${i} / ${j}`;
            div.className = 'segment';

            div.addEventListener('mouseover', colourSegment)

            div.addEventListener('mousedown', () => {
                div.removeEventListener('mouseover', colourSegment)
            });

            gridContainer.appendChild(div);
        }
    }
}

function deleteDivGrid(gridContainer) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function colourSegment(e) {

    let segment = e.target;

    const segmentColour = document.getElementById('segment-colour');

    segment.style.backgroundColor = segmentColour.value;
}