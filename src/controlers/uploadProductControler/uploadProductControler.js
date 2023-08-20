const { allProductsColection } = require("../../models/dataBase/DBConnect");

const uploadProductControler = async (req, res) => {
  try {
    const body = req.body;
    const result = await allProductsColection.insertOne(body);
    if (result.acknowledged) {
      res.send({
        success: true,
        message: "Your product uploaded successfully.",
      });
    } else {
      res.send({
        success: false,
        message: "Product upload failed.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "product upload server error.",
    });
  }
};

module.exports = uploadProductControler;
