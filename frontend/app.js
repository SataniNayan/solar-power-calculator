function calculateSolar() {
  const area = document.getElementById("area").value;
  const state = document.getElementById("state").value;
  const month = document.getElementById("month").value;

  if (!area) {
    alert("Enter land area");
    return;
  }

  fetch("https://solar-power-calculator.onrender.com/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ area, state, month })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").textContent = formatResult(data);
    })
    .catch(() => {
      alert("Server error. Please try again later.");
    });
}
