const express = require("express");
const completeOrder = require("../../controlers/completeOrderControler/completeOrderControler");
const router = express.Router();
router.patch("/completeOrder", completeOrder);
module.exports = router;
