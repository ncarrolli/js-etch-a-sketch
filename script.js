
function makeRows(size) {
  const container = document.querySelector(".grid-container");

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
  for (c = 0; c < (size * size); c++) {
    let cell = document.createElement("div");
    cell.setAttribute('draggable', 'false');
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', handleMouseover) 
  }
};


function changeColor(e) {
  currentColor = e.target.value
}


function handleMouseover(e) {
  console.log(e)
  if (mouseDown) {
    switch (currentMode) {
      case 'draw':
        this.style.backgroundColor = currentColor
        break;
      case 'erase':
        this.style.backgroundColor = "white"
    }
  }
}

function removeGrid() {
  const container = document.querySelector(".grid-container");
  container.innerHTML = ''
}

function updateDisplay(newSize) { 
  const sizeDisplay = document.getElementById('size-display')
  sizeDisplay.textContent = `${newSize} x ${newSize}`
}

function changeSize(newSize) {
  updateDisplay(newSize)
  removeGrid()
  makeRows(newSize)
  
}


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const sizeSlider = document.getElementById('size-slider')
let currentSize = sizeSlider.getAttribute('value')
makeRows(currentSize)
sizeSlider.onchange = (e) => changeSize(e.target.value)



const colorPicker = document.getElementById('color-picker')
colorPicker.addEventListener('input', changeColor)

const resetButton = document.getElementById('reset-btn')
resetButton.addEventListener('click', removeGrid)



let currentMode = 'draw'
let currentColor = "black"

const drawButton = document.getElementById('draw-btn')
drawButton.onclick = () => (currentMode = 'draw')

const eraseButton = document.getElementById('erase-btn')
eraseButton.onclick = () => (currentMode = 'erase')






