function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorDisplay = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = randomColor;
});