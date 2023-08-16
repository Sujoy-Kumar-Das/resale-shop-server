const { ObjectId } = require("mongodb");
const {
  allProductsColection,
  ordersCollections,
} = require("../../models/dataBase/DBConnect");

const myPorductsControler = async (req, res) => {
  try {
    const email = req.query.email;

    // query for find all products by email
    const query = { "seller.email": email };

    // query for find ordered products by email
    const bookingQueryEmail = { "orderedProduct.seller.email": email };

    // find orderd products
    const alreaybookedProducts = await ordersCollections
      .find(bookingQueryEmail)
      .toArray();

    // find all products
    const unBookedProducts = await allProductsColection.find(query).toArray();

    // find all products without booked by id
    const remainingProducts = unBookedProducts.filter((unBookedProduct) => {
      return !alreaybookedProducts.some((bookedProduct) =>
        unBookedProduct?._id.equals(
          new ObjectId(bookedProduct?.orderedProduct?._id)
        )
      );
    });
    const allProducts = [...remainingProducts, ...alreaybookedProducts];
    if (allProducts.length) {
      res.send({
        success: true,
        products: allProducts,
      });
    } else {
      res.send({
        success: false,
        message: "You don't have any product yet.",
        products: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Server error.Product not found",
    });
  }
};

module.exports = myPorductsControler;
