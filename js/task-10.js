function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputRef = document.querySelector('#controls input');
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');

createButtonRef.addEventListener('click', createBoxes);
destroyButtonRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputRef.value;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainerRef.append(...boxes);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
}