const express = require("express");
const verificationRetractControler = require("../../controlers/verificationRetractControler/verificationRetractControler");
const router = express.Router();
router.patch("/retract-verification/:id", verificationRetractControler);

module.exports = router;
