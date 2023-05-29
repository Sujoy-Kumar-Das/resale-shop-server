const express = require("express");
const getAllProductsControler = require("../../controlers/productsControlar/getAllPorductsControler");
const router = express.Router();

router.get("/products/catagorys/allProducts/:id",getAllProductsControler)

module.exports=router;