const express = require("express");
const acceptVerificationControler = require("../../controlers/acceptVerificationControler/acceptVerificationControler");
const router = express.Router();
router.patch("/accept-verification/:id", acceptVerificationControler);

module.exports = router;
