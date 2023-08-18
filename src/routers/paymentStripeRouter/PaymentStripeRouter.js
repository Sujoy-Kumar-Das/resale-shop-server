const express = require("express");
const paymentIntentStripeControler = require("../../controlers/paymentStripeControler/paymenStripeControler");
const router = express.Router();

router.post("/create-payment-intent", paymentIntentStripeControler);

module.exports = router;
