// const express = require("express");
// const login = require("../controllers/Login");
// const router = express.Router();
// const AppRouter = () => {
//   router.get("/user", login);

// };
// module.exports = AppRouter;

const express = require("express");
const login = require("../controllers/Login"); // Fix the import
const notFound = require("../controllers/NotFound");
const router = express.Router();

router.get("/user", login); // Define the route directly

module.exports = router; // Export router directly
