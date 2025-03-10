const fs = require("fs");
const path = require("path");

const validateDuplicate = (email, prevData) => {
  return prevData.includes(email);
};

const login = (req, res) => {
  const emailInp = req.body.email;
  const filePath = path.join(__dirname, "../emails.json");

  if (!emailInp) {
    return res.send("Email is required");
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailRegex.test(emailInp)) {
    return res.send("Invalid email format");
  }

  try {
    let prevData = [];

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      prevData = fileContent ? JSON.parse(fileContent) : [];
    }

    if (validateDuplicate(emailInp, prevData)) {
      return res.send("Email already exists");
    }

    prevData.push(emailInp);

    fs.writeFile(filePath, JSON.stringify(prevData, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send("Server error");
      }
      res.send("Email saved successfully");
    });
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).send("Server error");
  }
};

module.exports = login;
