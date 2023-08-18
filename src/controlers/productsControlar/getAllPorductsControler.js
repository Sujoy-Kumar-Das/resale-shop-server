const { ObjectId } = require("mongodb");
const {
  allProductsColection,
  ordersCollections,
  productsCatagoryCollection,
} = require("../../models/dataBase/DBConnect");

const getAllProductsControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { catagory_Id: id };
    const catagoryQuery = { _id: new ObjectId(id) };
    const productCatagory = await productsCatagoryCollection.findOne(
      catagoryQuery
    );
    const allProducts = await allProductsColection.find(query).toArray();
    const orderedProducts = await ordersCollections.find({}).toArray();
    const remainingProducts = allProducts.filter((product) => {
      return !orderedProducts.some((orderedProduct) =>
        product?._id.equals(new ObjectId(orderedProduct?.orderedProduct?._id))
      );
    });
    if (remainingProducts.length) {
      res.send({
        success: true,
        products: remainingProducts,
      });
    } else {
      res.send({
        success: false,
        message: `Currently we don't have ${productCatagory?.title} laptop`,
        products: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Products server error",
      products: [],
    });
  }
};
module.exports = getAllProductsControler;
