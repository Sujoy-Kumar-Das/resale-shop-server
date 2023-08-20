const express = require("express");
const isSellerControler = require("../../controlers/isSellerControler/isSellerControler");

const router = express.Router();
router.get("/user/seller/:email", isSellerControler);

module.exports = router;
