const express = require("express");
const productDetailControler = require("../../controlers/productsControlar/productDetailContorler");
const router = express.Router();
router.get("/products/detail/:id",productDetailControler)

module.exports = router;