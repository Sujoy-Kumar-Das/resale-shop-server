const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.j1u8ft3.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbConnect = async () => {
  try {
    await client.connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
// collections
const productsCatagoryCollection = client
  .db("resale-shop")
  .collection("products-catagory");
const aboutCollection = client.db("resale-shop").collection("about");
const allProductsColection = client
  .db("resale-shop")
  .collection("all-products");
const usersCollectons = client.db("resale-shop").collection("users");
const ordersCollections = client.db("resale-shop").collection("orders");
const paymentsCollections = client.db("resale-shop").collection("payments");

module.exports = {
  dbConnect,
  productsCatagoryCollection,
  aboutCollection,
  allProductsColection,
  usersCollectons,
  ordersCollections,
  paymentsCollections,
};
