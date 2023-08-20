const express = require("express");
const jwtControler = require("../../controlers/jwtControler/jwtControler");
const router = express.Router();
router.get("/jwt", jwtControler);

module.exports = router;
