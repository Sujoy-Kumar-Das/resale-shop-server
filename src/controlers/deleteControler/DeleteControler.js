const { ObjectId } = require("mongodb");
const { allProductsColection } = require("../../models/dataBase/DBConnect");

const deleteControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const product = await allProductsColection.findOne(query);
    if (!product) {
      return res.send({
        success: false,
        message: "Product doesn't exists.",
      });
    }
    if (product.booked) {
      return res.send({
        success: false,
        message: "This product has been booked.You can't delete it.",
      });
    }
    const result = await allProductsColection.deleteOne(query);
    if (result.acknowledged) {
      return res.send({
        success: true,
        message: `${product.model} deleted successfully.`,
      });
    } else {
      res.send({
        success: false,
        message: `Something went wrong you can't delete ${product.model} now.Please try again later.`,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "server error",
    });
  }
};

module.exports = deleteControler;
