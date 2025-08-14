let totalCards = 416;
let cardsRemaining = totalCards;

function getSimulationCount(cardsRemaining, totalCards) {
  const progress = 1 - cardsRemaining / totalCards;
  const minSim = 500;
  const maxSim = 5000;
  return Math.round(minSim + (maxSim - minSim) * progress ** 2);
}

document.getElementById("numCards").addEventListener("change", e => {
  totalCards = parseInt(e.target.value);
  cardsRemaining = totalCards;
  updateSimCount();
});

document.getElementById("enterBtn").addEventListener("click", () => {
  const input = document.getElementById("cardsInput").value.trim();
  if (input) {
    cardsRemaining -= input.split(/\s*/).filter(Boolean).length;
    if (cardsRemaining < 0) cardsRemaining = 0;
    updateSimCount();
    updatePrediction();
  }
  document.getElementById("cardsInput").value = "";
});

function updateSimCount() {
  document.getElementById("simCount").textContent = getSimulationCount(cardsRemaining, totalCards);
  document.getElementById("remainingCards").textContent = cardsRemaining;
}

function updatePrediction() {
  // This is a placeholder — you can add real baccarat prediction logic here
  const sims = getSimulationCount(cardsRemaining, totalCards);
  document.getElementById("prediction").textContent = sims > 3000 ? "Banker" : "Player";
}

updateSimCount();
