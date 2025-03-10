const fs = require("fs");
const path = require("path");

const details = (req, res) => {
  const pathName = path.join(__dirname, "../emails.json");
  const pathNamePh = path.join(__dirname, "../phoneNumber.json");

  let emailFileContents = "No emails found";
  let phoneFileContents = "No phone numbers found";

  if (fs.existsSync(pathName)) {
    emailFileContents = fs.readFileSync(pathName, "utf-8");
  }
  if (fs.existsSync(pathNamePh)) {
    phoneFileContents = fs.readFileSync(pathNamePh, "utf-8");
  }

  res.send({
    message: "All registered details",
    emails: JSON.parse(emailFileContents || "[]"),
    phoneNumbers: JSON.parse(phoneFileContents || "[]"),
  });
};

module.exports = details;
