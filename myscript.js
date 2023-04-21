// genero la griglia 



const eleGrid = document.querySelector(".grid");
// createGrid(100, eleGrid);

for (let i = 0; i < 100; i++) {
    eleGrid.innerHTML += `<div class="cell">${i + 1}</div>`;
}

// utilizzo la classe clicked per colorare le caselle

const listCells = document.querySelectorAll(".cell")

for (let i = 0; i < listCells.length; i++) {
    const cell = listCells[i];
    cell.addEventListener("click",
       function() {
         this.classList.toggle("clicked");
         console.log(this);
       }
    );

}

// function createGrid (numCells, eleContainer) {
//     for (let i = 0; i < numCells; i++) {
//         eleContainer.innerHTML += 
//     }
// }