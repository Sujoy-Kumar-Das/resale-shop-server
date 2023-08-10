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
    const bookedQuery = { orderProductID: id };
    const isAvailable = await allProductsColection.findOne(query);
    const alreadyBooked = await ordersCollections.findOne(bookedQuery);
    if (!isAvailable) {
      return res.send({ success: false, message: "Product not found." });
    }
    if (alreadyBooked) {
      return res.send({ success: false, message: "Product alreday booked." });
    } else {
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          booked: true,
        },
      };
      const updatedProduct = await allProductsColection.updateOne(
        query,
        updateDoc,
        options
      );
      if (updatedProduct.acknowledged) {
        const result = await ordersCollections.insertOne(order);
        if (result.acknowledged) {
          res.send({
            success: true,
            message:
              "Your Order Placed Successfully.Please Pay For Confrimation.",
          });
        }
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Error booking product",
    });
  }
};

module.exports = storeOrderControler;
