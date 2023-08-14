const { allProductsColection } = require("../../models/dataBase/DBConnect");

const myPorductsControler = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { "seller.email": email };
    const result = await allProductsColection.find(query).toArray();
    if (result.length) {
      res.send({
        success: true,
        products: result,
      });
    } else {
      res.send({
        success: false,
        message: "You don't have any product yet.",
        products: [],
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Server error.Product not found",
    });
  }
};

module.exports = myPorductsControler;
