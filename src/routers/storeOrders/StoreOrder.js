const express = require("express");
const { ordersCollections } = require("../../models/dataBase/DBConnect");
const storeOrderControler = require("../../controlers/storeOrederControler/StoreOrderControler");
const router = express.Router();
router.post("/post-order", storeOrderControler);
module.exports = router;
