function downloadPDF() {
  const area = document.getElementById("area").value;
  const state = document.getElementById("state").value;
  const month = document.getElementById("month").value;

  fetch("http://localhost:5000/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ area, state, month })
  })
    .then(res => res.json())
    .then(data => {
      data.area = area;
      data.state = state;
      data.month = month;

      fetch("http://localhost:5000/download-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(res => res.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "solar-report.pdf";
          a.click();
        });
    });
}
