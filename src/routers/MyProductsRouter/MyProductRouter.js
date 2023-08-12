const express = require("express");
const myPorductsControler = require("../../myPorductsControler/MyPorductsControler");
const router = express.Router();
router.get("/myProducts", myPorductsControler);
module.exports = router;
