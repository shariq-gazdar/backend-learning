const fs = require("fs");
const path = require("path");

// Function to validate phone number format
const validateRegex = (phoneNumber) => {
  const phRegex = /^\+92[0-9]{3}-[0-9]{7}$/;
  return phRegex.test(phoneNumber);
};

const validateDuplicate = (phNumber) => {
  const pathName = path.join(__dirname, "../phoneNumber.json");

  if (!fs.existsSync(pathName)) {
    return false;
  }

  const fileContent = fs.readFileSync(pathName, "utf-8");
  const phoneArr = fileContent ? JSON.parse(fileContent) : [];

  return phoneArr.includes(phNumber); // Returns true if duplicate exists
};

// Register phone number
const registerNumber = (req, res) => {
  const { phoneNumber } = req.body;
  const pathName = path.join(__dirname, "../phoneNumber.json");

  if (!phoneNumber) {
    return res.send("Phone Number Is Required");
  }

  if (!validateRegex(phoneNumber)) {
    return res.send("Phone number is in the wrong format");
  }

  if (validateDuplicate(phoneNumber)) {
    return res.send("Duplicates Are Not Allowed");
  }

  let phoneArr = [];
  if (fs.existsSync(pathName)) {
    const fileContent = fs.readFileSync(pathName, "utf-8");
    phoneArr = fileContent ? JSON.parse(fileContent) : [];
  }

  phoneArr.push(phoneNumber);

  // Save updated list to file
  fs.writeFileSync(pathName, JSON.stringify(phoneArr, null, 2));

  res.send("Phone number saved successfully");
};

module.exports = registerNumber;
