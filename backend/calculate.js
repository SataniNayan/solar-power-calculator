const temperatureData = require("./temperatureData.json");
const sunHoursData = require("./sunHoursData.json");
const electricityRates = require("./electricityRates.json");

module.exports = (req, res) => {
  const { area, state, month } = req.body;

  const panelArea = 2;
  const panelPower = 0.55;
  const idealTemp = 25;

  const panels = Math.floor(area / panelArea);
  const capacityKW = panels * panelPower;

  const temp =
    month === "FULL_YEAR"
      ? temperatureData[state].yearlyAvg
      : temperatureData[state][month];

  const efficiency = 1 - Math.max(0, (temp - idealTemp) * 0.004);
  const sunHours = sunHoursData[state];
  const days = month === "FULL_YEAR" ? 365 : 30;

  const units = capacityKW * sunHours * days * efficiency;
  const rate = electricityRates[state] || 7;
  const earnings = units * rate;
  const cost = capacityKW * 50000;
  const roi = cost / (earnings * 12);

  res.json({
    panels,
    capacityKW: capacityKW.toFixed(2),
    units: units.toFixed(0),
    earnings: earnings.toFixed(0),
    cost: Math.round(cost),
    roi: roi.toFixed(1)
  });
};
