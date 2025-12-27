function downloadPDF() {
  const area = document.getElementById("area").value;
  const state = document.getElementById("state").value;
  const month = document.getElementById("month").value;

  if (!area || !state || !month) {
    alert("Please fill all details");
    return;
  }

  const API_BASE = "https://solar-power-calculator.onrender.com";

  // Step 1: Calculate data
  fetch(`${API_BASE}/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ area, state, month })
  })
    .then(res => res.json())
    .then(data => {
      // Add extra fields for PDF
      data.area = area;
      data.state = state;
      data.month = month;

      // Step 2: Download PDF
      return fetch(`${API_BASE}/download-pdf`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "solar-report.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => {
      alert("PDF download failed. Please try again.");
    });
}
