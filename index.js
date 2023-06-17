const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000;

// database connect
const { dbConnect } = require("./src/models/dataBase/DBConnect");

// test router
const testRouter = require("./src/routers/testRouter");
// get porducts catagory
const getProductCatagory = require("./src/routers/productsRoute/getProductCatagory");
// get all products per catagory
const getAllProducts = require("./src/routers/productsRoute/allProducts");
// get single product detail 
const productDetail = require("./src/routers/productsRoute/productDetail")
// store user
const storeUser = require("./src/routers/storeUser/StoreUser")
// get user
const user = require("./src/routers/getUserRouter/getUserRouter")
// about api
const about = require("./src/routers/about/about")


dbConnect();
app.use(testRouter);
app.use(getProductCatagory);
app.use(getAllProducts)
app.use(productDetail)
app.use(about)
app.use(storeUser)
app.use(user)


app.listen(port, () => {
  console.log("server is running");
});
