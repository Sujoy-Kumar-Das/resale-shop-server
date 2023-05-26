const express = require("express");
const getProductControler = require("../../controlers/getProductControler");
const router = express.Router();
// test server
router.get("/products/catagorys", getProductControler);
module.exports = router;
