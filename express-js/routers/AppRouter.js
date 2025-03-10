// const express = require("express");
// const login = require("../controllers/Login");
// const router = express.Router();
// const AppRouter = () => {
//   router.get("/user", login);

// };
// module.exports = AppRouter;

const express = require("express");
const login = require("../controllers/Login");
const details = require("../controllers/Emails");
const registerNumber = require("../controllers/RegisterNumber");
const router = express.Router();

router.post("/registerEmail", login);
router.get("/details", details);
router.post("/registerNumber", registerNumber);

module.exports = router;
