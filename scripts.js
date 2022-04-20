const container = document.querySelector('#container');


function makeGrid(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(c = 0; c < (rows * cols); c++){
    let cell = document.createElement('div');
    cell.setAttribute("id", `div${c}`);
    container.appendChild(cell).className = 'grid-item';
  };
};

makeGrid(16, 16);
var cells = document.getElementsByClassName("grid-item")

for (let i = 0; i < cells.length; i++){
  cells[i].addEventListener('mouseover', () =>{
    cells[i].classList.add('hover-cells');
  });
};