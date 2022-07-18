function createBoxedLayout(){
  document.body.innerText = '';
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.appendChild(container);
  for ( let i = 0; i < 256; i++){
    const div = document.createElement('div');
    let divGrid = container.appendChild(div);
    div.style = 'background-color:pink;';
     divGrid += divGrid;
  }
}

function changeColor(){
  this.style = 'background-color:gold;';
}

createBoxedLayout();
document.querySelector('body').addEventListener('mouseup', createBoxedLayout);
document.querySelectorAll('.container div').forEach(element => element.addEventListener('mouseover', changeColor));