const { ObjectId } = require("mongodb");
const { ordersCollections } = require("../../models/dataBase/DBConnect");

const completeOrderControler = async (req, res) => {
  try {
    const id = req.query.id;
    const query = { _id: new ObjectId(id) };
    const product = await ordersCollections.findOne(query);
    if (!product.completed) {
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          completed: true,
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
          message: `${product?.orderedProduct?.model} will be shift successfully`,
        });
      }
    } else {
      res.send({
        success: false,
        message: `${product?.orderedProduct?.model} already shifted`,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "order complete server error.",
    });
  }
};

module.exports = completeOrderControler;
