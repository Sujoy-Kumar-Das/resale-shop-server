const { ObjectId } = require("mongodb");
const { allProductsColection } = require("../../models/dataBase/DBConnect");

const editProductControler = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const query = { _id: new ObjectId(id) };
    const product = await allProductsColection.findOne(query);
    if (!product) {
      return res.send({
        success: false,
        message: `${product.model} is not exists`,
      });
    }
    if (product.booked) {
      return res.send({
        success: false,
        message: `You can't edit ${product.model}.Because ${product.model} already has been booked. `,
      });
    }
    const options = { upsert: true };
    const updatedDoc = {
      $set: body,
    };
    const result = await allProductsColection.updateOne(
      query,
      updatedDoc,
      options
    );
    if (result.acknowledged) {
      return res.send({
        success: true,
        message: `${product.BrandName} ${product.model} updated successfully.`,
      });
    } else {
      return res.send({
        success: false,
        message: `${product.BrandName} ${product.model} update faild.Try again letter.`,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "server error",
    });
  }
};
module.exports = editProductControler;
