function formatResult(data) {
  return `
Panels Required : ${data.panels}
Total Capacity  : ${data.capacityKW} kW
Units Generated : ${data.units} units
Monthly Income  : ₹${data.earnings}
Estimated Cost  : ₹${data.cost}
ROI (years)     : ${data.roi}
`;
}
