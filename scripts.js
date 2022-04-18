const container = document.querySelector('#container');
console.log(container);
for (let i = 1; i <= 16; i++){
  const newDiv = document.createElement('div');
  newDiv.id = 'div' + i;
  newDiv.className = 'sketchBox';
  container.appendChild(newDiv);
}