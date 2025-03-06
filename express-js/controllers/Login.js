const login = (req, res) => {
  if (req.body.age >= 18) {
    res.send("user is valid");
  } else {
    res.send("User is Invalid");
  }
  // res.send("user is valid");
};
module.exports = login;
