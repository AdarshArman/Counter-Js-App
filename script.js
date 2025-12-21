const barsContainer = document.getElementById("bars");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const valueText = document.getElementById("value");

let barCount = 0;
let value = 2;

function renderBars() {
  barsContainer.innerHTML = "";

  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    const angle = (360 / barCount) * i;
    bar.style.transform = `rotate(${angle}deg) translateX(-50%)`;

    barsContainer.appendChild(bar);
  }
}

increaseBtn.addEventListener("click", () => {
  barCount += 1;
  value += 1;
  valueText.textContent = value;
  renderBars();
});

decreaseBtn.addEventListener("click", () => {

    barCount -= 1;
    value -= 1;
    valueText.textContent = value;
    renderBars();
  
});

renderBars();
