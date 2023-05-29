const express = require("express");
const getProductCatagoryControler = require("../../controlers/productsControlar/getProductsCatagoryControler");
const router = express.Router();
// test server
router.get("/products/catagorys", getProductCatagoryControler);
module.exports = router;
