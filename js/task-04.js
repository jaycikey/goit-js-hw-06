const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");

let counterValue = 0;

counter.addEventListener("click", event => {
    if (event.target.dataset.action === "increment") {
        counterValue += 1;
    } else if (event.target.dataset.action === "decrement"){
        counterValue -= 1;
    }
    
    valueSpan.textContent = counterValue;
});