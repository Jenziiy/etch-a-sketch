import { button, buttonClear, modal, span, defaultSizeSquared, maxInput, initializePad, getContainer, input } from './utils.js';
let userInput = 10;
function createSketchPad(userInput_c){
  initializePad();
if (userInput_c > maxInput) userInput = defaultSizeSquared; // Setting a default value to prevent freezing, crashing & delays.
  for ( let i = 0; i < userInput_c **2; i++){
    getContainer;
    const createSquare = document.createElement('div');
    getContainer.append(createSquare);
    createSquare.classList.add('square');
    let sketchGrid = getContainer.appendChild(createSquare);
    createSquare.style = 'background-color:pink;';
     sketchGrid += sketchGrid;
  }
  getContainer.style.gridTemplateColumns = `repeat(${userInput},1fr)`;
}

function getInputValue() {
  let userInput_c = document.getElementById('input-tiles').value;
  alert(userInput_c);
  //userInput = userInput.value;
  input.addEventListener('submit', () => modal.style.display = 'none');
  createSketchPad(userInput_c);
  return userInput;

}

function draw() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square=>square.addEventListener("mouseover", changeColor));
}

function changeColor(){
  this.style.backgroundColor = 'gold';
}
createSketchPad(userInput);
input.addEventListener('submit', getInputValue);
button.addEventListener('click', () => modal.style.display = 'block');
span.addEventListener('click', () => modal.style.display = 'none');
span.addEventListener('click', createSketchPad);
getContainer.addEventListener('mousedown', draw);
buttonClear.addEventListener('click', createSketchPad);


