const express = require("express");
const storeOrderControler = require("../../controlers/storeOrederControler/StoreOrderControler");
const router = express.Router();
router.post("/post-order", storeOrderControler);
module.exports = router;
