const express = require("express");
const getUserControler = require("../../controlers/getUserInfoControler/getuUserInfoControler");
const router = express.Router();
router.get("/user", getUserControler);

module.exports = router;
