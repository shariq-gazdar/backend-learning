const express = require("express");
const app = express();
const parse = require("parse");
const bodyParser = require("body-parser");
const port = 5000;
// app.use(parse());
app.use(bodyParser());
app.get("/", (req, res) => {
  const jsonData = {
    name: "Shariq Gazdar",
    role: "Author",
  };
  res.send(jsonData);
});
app.get("/user", (req, res) => {
  const { email, password } = req.body;
  //   const userId = email + password;
  //   res.send(userId);
  console.log(email);
  res.send("user route");

  //   res.send(req.body);
});
app.listen(port, () => {
  console.log("server running on port:", port);
});
