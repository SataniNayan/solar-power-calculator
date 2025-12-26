const PDFDocument = require("pdfkit");

module.exports = (data, res) => {
  const doc = new PDFDocument();

  res.setHeader("Content-Disposition", "attachment; filename=solar-report.pdf");
  res.setHeader("Content-Type", "application/pdf");

  doc.pipe(res);

  doc.fontSize(18).text("Solar Power Estimation Report", { align: "center" });
  doc.moveDown();

  doc.fontSize(12);
  doc.text(`State: ${data.state}`);
  doc.text(`Month: ${data.month}`);
  doc.text(`Land Area: ${data.area} m²`);
  doc.moveDown();

  doc.text(`Panels Required: ${data.panels}`);
  doc.text(`System Capacity: ${data.capacityKW} kW`);
  doc.text(`Monthly Units: ${data.units}`);
  doc.text(`Estimated Earnings: ${data.earnings}`);
  doc.text(`Estimated Cost: ${data.cost}`);
  doc.text(`ROI (years): ${data.roi}`);

  doc.end();
};
