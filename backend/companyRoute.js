


const Company = require("./companyModel");

module.exports = async (req, res) => {
  try {
    console.log("Fetching companies...");   // 👈 STEP 1

    const companies = await Company.find(); // 👈 STEP 2

    console.log("Companies:", companies);   // 👈 STEP 3 (THIS LINE YOU ASKED)

    res.json(companies);
  } catch (err) {
    console.error("ERROR FETCHING COMPANIES:", err); // 👈 STEP 4
    res.status(500).json({ error: "Failed to fetch companies" });
  }
};
