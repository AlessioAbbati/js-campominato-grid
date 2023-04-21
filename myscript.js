// genero la griglia 

const eleGrid = document.querySelector(".grid");

for (let i = 0; i < 100; i++) {
    eleGrid.innerHTML += `<div class="cell"></div>`;
}