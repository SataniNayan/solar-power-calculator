const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  company: String,
  name: String,
  mobile: String,
  state: String,
  city: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Inquiry", inquirySchema);
