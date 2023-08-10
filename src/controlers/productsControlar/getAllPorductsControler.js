const {
  allProductsColection,
  ordersCollections,
} = require("../../models/dataBase/DBConnect");

const getAllProductsControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { catagory_Id: id };
    const products = await allProductsColection.find(query).toArray();

    // const bookedProductsIds = bookedProducts
    if (products.length) {
      res.send({
        success: true,
        products: products,
      });
    } else {
      res.send({
        success: false,
        products: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = getAllProductsControler;
