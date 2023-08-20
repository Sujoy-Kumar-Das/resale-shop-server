const express = require("express");
const myOrderControler = require("../../controlers/myOrdersControer/myOrderControler");
const verifyJwt = require("../../midleware/verifyJwt");
const router = express.Router();


router.get("/myOrders", verifyJwt,  myOrderControler);

module.exports = router;
