const express = require("express");
const declieVerificationControler = require("../../controlers/declineVerificationControler/declineVerificationControler");
const router = express.Router();
router.patch("/decline-verification/:id", declieVerificationControler);

module.exports = router;
