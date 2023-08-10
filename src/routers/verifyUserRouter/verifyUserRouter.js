const express = require("express");
const { usersCollectons } = require("../../models/dataBase/DBConnect");
const verifyControler = require("../../controlers/verifyControler/verifyControler");
const router = express.Router();
router.patch("/verify/user", verifyControler);

module.exports = router;
