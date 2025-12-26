const Inquiry = require("./inquiryModel");

module.exports = async (req, res) => {
  try {
    const inquiry = new Inquiry(req.body);
    await inquiry.save();
    res.json({ message: "Inquiry sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save inquiry" });
  }
};
