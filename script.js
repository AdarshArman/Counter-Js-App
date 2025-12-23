const barsContainer = document.getElementById("bars");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const valueText = document.getElementById("value");

const TOTAL_BARS = 10;
let value = 0;

function renderBars() {
  barsContainer.innerHTML = "";

  for (let i = 0; i < TOTAL_BARS; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    const angle = (360 / TOTAL_BARS) * i;
    bar.style.transform = `rotate(${angle}deg) translateY(-100px)`;

    barsContainer.appendChild(bar);
  }
}

function updateBars(val) {
  const bars = document.querySelectorAll(".bar");

  // reset all bars to blue
  bars.forEach(bar => {
    bar.style.background = "radial-gradient(circle, #6a2cff, #4a00e0)";
  });

  const absVal = Math.abs(val);

  //  count logic
  const count =
    absVal % TOTAL_BARS === 0 && absVal !== 0
      ? TOTAL_BARS
      : absVal % TOTAL_BARS;

  const activeColor = val >= 0 ? "yellow" : "red";

  for (let i = 0; i < count; i++) {
    bars[i].style.background = activeColor;
  }
}

increaseBtn.addEventListener("click", () => {
  value++;
  valueText.textContent = value;
  updateBars(value);
});

decreaseBtn.addEventListener("click", () => {
  value--;
  valueText.textContent = value;
  updateBars(value);
});

renderBars();
updateBars(value);
