const { ObjectId } = require("mongodb");
const { ordersCollections } = require("../../models/dataBase/DBConnect");

const cancelOrderControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const product = await ordersCollections.findOne(query);
    if (!product) {
      return res.send({
        success: false,
        message: "Your order alreay canceled",
      });
    }
    if (product?.payment === "paid") {
      return res.send({
        success: false,
        message: "Your order has been shifted. So you can't cancel this order.",
      });
    }
    const result = await ordersCollections.deleteOne(query);
    if (result.acknowledged) {
      return res.send({
        success: true,
        message: "You canceled this order.",
      });
    } else {
      res.send({
        success: false,
        message:
          "something went wrong.you cant't cancel this order now.try again later.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "cancel order server error.",
    });
  }
};

module.exports = cancelOrderControler;
