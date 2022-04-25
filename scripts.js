const container = document.querySelector('#container');
const button = document.querySelector('#button');

function makeGrid(rows, cols){
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for(c = 0; c < (rows * cols); c++){
    let cell = document.createElement('div');
    cell.setAttribute("id", `div${c}`);
    container.appendChild(cell).className = 'grid-item';
    
  };
  var cells = document.getElementsByClassName("grid-item")
  for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('mouseover', () =>{
      cells[i].classList.add('hover-cells');
    });
  };
};

makeGrid(16, 16);



button.addEventListener('click', graphReset);

function graphReset(){
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  let gridNumber = prompt("Please enter the number of rows and columns", 16);
  if (gridNumber > 100){
    alert("Please try again.");
    graphReset();
  }
  else{
    makeGrid(gridNumber , gridNumber);
  }
}
