const { ObjectId } = require("mongodb");
const {
  ordersCollections,
  paymentsCollections,
} = require("../../models/dataBase/DBConnect");

const storePaymentControler = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const storePayment = await paymentsCollections.insertOne(body);
    if (storePayment.acknowledged) {
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          payment: true,
        },
      };
      const result = await ordersCollections.updateOne(
        query,
        updatedDoc,
        options
      );
      if (result.acknowledged) {
        res.send({
          success: true,
          message: "Your Payment Completed.",
        });
      } else {
        res.send({
          success: false,
          message: "Faild to payment.please try again later.",
        });
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "payment server error.",
    });
  }
};
module.exports = storePaymentControler;
