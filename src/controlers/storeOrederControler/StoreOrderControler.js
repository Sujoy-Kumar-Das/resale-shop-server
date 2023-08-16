const { ObjectId } = require("mongodb");
const {
  ordersCollections,
  allProductsColection,
} = require("../../models/dataBase/DBConnect");

const storeOrderControler = async (req, res) => {
  try {
    const order = req.body;
    const id = req.query.productId;
    const query = { _id: new ObjectId(id) };
    const bookedQuery = { "orderedProduct._id": id };
    const isAvailable = await allProductsColection.findOne(query);
    const alreadyBooked = await ordersCollections.findOne(bookedQuery);
    if (!isAvailable) {
      return res.send({ success: false, message: "Product not found." });
    }
    if (alreadyBooked) {
      return res.send({ success: false, message: "Product alreday booked." });
    }

    const storeOrder = await ordersCollections.insertOne(order);
    if (storeOrder.acknowledged) {
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          booked: true,
        },
      };
      const result = await ordersCollections.updateOne(
        bookedQuery,
        updateDoc,
        options
      );
      if (result.acknowledged) {
        res.send({
          success: true,
          message:
            "Your Order Placed Successfully.Please Pay For Confrimation.",
        });
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "server error booking product",
    });
  }
};

module.exports = storeOrderControler;
