const express = require("express");
const app = express();
const appRouter = require("./routers/AppRouter.js");
const parse = require("parse");
const bodyParser = require("body-parser");
const notFound = require("./controllers/NotFound.js");
const port = 5000;
// app.use(parse());
app.use(express.json());
app.use(appRouter);
app.use(notFound);
// app.use();
// app.get("/", (req, res) => {
//   const jsonData = {
//     name: "Shariq Gazdar",
//     role: "Author",
//   };
//   res.send(jsonData);
// });
// app.get("/user", (req, res) => {
//   // const { email, password, age } = req.body;
// });
app.listen(port, () => {
  console.log("server running on port:", port);
});
