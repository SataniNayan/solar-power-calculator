function calculateSolar() {
  const area = document.getElementById("area").value;
  const state = document.getElementById("state").value;
  const month = document.getElementById("month").value;

  if (!area) {
    alert("Enter land area");
    return;
  }

  fetch("http://localhost:5000/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ area, state, month })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").textContent = formatResult(data);
    })
    .catch(() => {
      alert("Backend not running");
    });
}
