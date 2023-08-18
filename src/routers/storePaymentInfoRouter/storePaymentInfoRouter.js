const express = require("express");
const storePaymentControler = require("../../controlers/storePaymentControler/storePaymentControler");
const router = express.Router();
router.post("/store-payment-info/:id", storePaymentControler);

module.exports = router;
