const Company = require("./companyModel");

module.exports = async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch companies" });
  }
};
