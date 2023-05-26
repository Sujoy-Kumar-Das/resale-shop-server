const express = require("express");
const aboutControler = require("../../controlers/aboutControler");
const router = express.Router();
router.get("/about", aboutControler);

module.exports = router;
