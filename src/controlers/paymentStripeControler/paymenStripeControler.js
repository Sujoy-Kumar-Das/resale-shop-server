const stripe = require("stripe")(process.env.Payment_Sectet_Key);

const paymentIntentStripeControler = async (req, res) => {
  try {
    const body = req.body;
    const price = body.price;
    const amount = price * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount,
      payment_method_types: ["card"],
    });
    if (!paymentIntent) {
      return res.send({
        success: false,
        message: "invalid client secret.",
      });
    } else {
      res.send({
        success: true,
        clientSecret: paymentIntent.client_secret,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Payment intent server error.",
    });
  }
};
module.exports = paymentIntentStripeControler;
