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

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/solarDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/send-inquiry", inquiryRoute);

app.get("/companies", companyRoute);

module.exports = app;


