const express = require("express");
const myProductsControler = require("../../controlers/myPorductsControler/MyPorductsControler");
const router = express.Router();
router.get("/myProducts", myProductsControler);
module.exports = router;
