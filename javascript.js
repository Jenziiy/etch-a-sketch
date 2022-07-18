function createBoxedLayout(){
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
//document.addEventListener('click', createBoxedLayout);
createBoxedLayout();
