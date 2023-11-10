const express = require("express");
const router = express.Router();
const {login, refresh, logout} = require("../controllers/authController");
import loginLimiter from "../middleware/loginLimiter";

router.route("/").post(loginLimiter,login);

router.route("/refresh").get(refresh);

router.route("/logout").post(logout);

module.exports = router;
