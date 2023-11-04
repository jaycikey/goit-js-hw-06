const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", (event) => {
    const fontSize = event.target.value;
    text.style.fontSize = `${fontSize}px`;
});