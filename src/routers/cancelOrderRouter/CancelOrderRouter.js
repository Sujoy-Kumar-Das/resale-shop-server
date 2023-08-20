const express = require("express");
const cancelOrderControler = require("../../controlers/cancelOrderControler/cancelOrderControler");
const router = express.Router();
router.delete("/delete/order/:id", cancelOrderControler);

module.exports = router;
