const express = require("express");
const cors = require("cors");
const calculate = require("./calculate");
const pdfGenerator = require("./pdfGenerator");
const mongoose = require("mongoose");
const inquiryRoute = require("./inquiryRoute");
const companyRoute = require("./companyRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Solar Calculator API Running");
});

app.post("/calculate", calculate);

app.post("/download-pdf", (req, res) => {
  pdfGenerator(req.body, res);
});

// ✅ MongoDB Atlas connection (FIXED)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.post("/send-inquiry", inquiryRoute);
app.get("/companies", companyRoute);

module.exports = app;
