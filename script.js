
function makeRows(rows, cols) {
  const container = document.querySelector(".grid-container");

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute('draggable', 'false');
    container.appendChild(cell).className = "grid-item";
  }

};

makeRows(15,15);

function changeColor(e) {
  currentColor = e.target.value
}

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(element => {
    element.style.backgroundColor = "white"
  });
}

function handleMouseover(e) {
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

function changeSize(val) {
  console.log(val)
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


const colorPicker = document.getElementById('color-picker')
colorPicker.addEventListener('input', changeColor)

const resetButton = document.getElementById('reset-btn')
resetButton.addEventListener('click', clearGrid)



let currentMode = 'draw'
let currentColor = "black"

const drawButton = document.getElementById('draw-btn')
drawButton.onclick = () => (currentMode = 'draw')

const eraseButton = document.getElementById('erase-btn')
eraseButton.onclick = () => (currentMode = 'erase')

const gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(item => {
  item.addEventListener('mouseover', handleMouseover) 
});



const sizeSlider = document.getElementById('size-slider')
sizeSlider.onchange = (e) => changeSize(e.target.value)