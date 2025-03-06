// const express = require("express");
// const login = require("../controllers/Login");
// const router = express.Router();
// const AppRouter = () => {
//   router.get("/user", login);

// };
// module.exports = AppRouter;

const express = require("express");
const login = require("../controllers/Login");
const router = express.Router();

router.get("/user", login);

module.exports = router;
