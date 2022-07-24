import { button, buttonClear, modal, closeButton, defaultSizeSquared, maxInput, initializePad, getContainer, input, submitButton, userInput, qs, qsa } from './utils.js';
function createSketchPad(userInput = 16){
  initializePad();

if (userInput > maxInput) userInput = defaultSizeSquared; // Setting a default value to prevent freezing, crashing & delays.
  for ( let i = 0; i < userInput **2; i++){
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

function draw() {
  const squares = qsa('.square');
  squares.forEach(square=>square.addEventListener("mouseover", (e) => e.target.style.backgroundColor = 'gold'));
}

function undraw() {
  const squares = qsa('.square');
  squares.forEach(square=>square.addEventListener("mouseover", (e) => e.target.style.backgroundColor = 'pink'));
}

createSketchPad();
input.addEventListener('input', (e) => createSketchPad(e.target.value));
document.body.addEventListener('keypress', (e) => { if ( e.key === 'Enter') { modal.style.display = 'none' } } ) ;
document.body.addEventListener('keypress', (e) => { if ( e.key === ' ') { modal.style.display = 'block' } } ) ;
submitButton.addEventListener('click', () => modal.style.display = 'none');
button.addEventListener('click', () => modal.style.display = 'block');
closeButton.addEventListener('click', () => modal.style.display = 'none');
closeButton.addEventListener('click', () => createSketchPad());
getContainer.addEventListener('mousedown', draw);
getContainer.addEventListener('mouseup', undraw);
buttonClear.addEventListener('click', () => { const qOfSquares = Math.sqrt(document.querySelectorAll('.square').length); createSketchPad(qOfSquares);});


