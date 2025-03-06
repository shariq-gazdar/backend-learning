const express = require("express");
const app = express();
const appRouter = require("./routers/AppRouter.js");
const notFound = require("./controllers/NotFound.js");
const port = 5000;
app.use(express.json());
app.use(appRouter);
app.use(notFound);
app.listen(port, () => {
  console.log("server running on port:", port);
});

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
