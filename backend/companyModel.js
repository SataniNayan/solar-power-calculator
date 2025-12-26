const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  image: String,
  state: String,
  city: String
});

module.exports = mongoose.models.Company || mongoose.model("Company", companySchema);

