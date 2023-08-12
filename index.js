const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

// database connect
const {
  dbConnect,
  allProductsColection,
} = require("./src/models/dataBase/DBConnect");

// test router
const testRouter = require("./src/routers/testRouter");
// get porducts catagory
const getProductCatagory = require("./src/routers/productsRoute/getProductCatagory");
// get all products per catagory
const getAllProducts = require("./src/routers/productsRoute/allProducts");
// get single product detail
const productDetail = require("./src/routers/productsRoute/productDetail");
// store user
const storeUser = require("./src/routers/storeUser/StoreUser");
// get user
const user = require("./src/routers/getUserRouter/getUserRouter");
// verify user
const verifyUser = require("./src/routers/verifyUserRouter/verifyUserRouter");
// change role
const changeRole = require("./src/routers/changeRoleRouter/changeRoleRouter");
// get my all products
const getMyAllProducts = require("./src/routers/MyProductsRouter/MyProductRouter");
// complete order api
const completeOrder = require("./src/routers/completeOrder/CompleteOrder");
// about api
const about = require("./src/routers/about/about");
// post order
const order = require("./src/routers/storeOrders/StoreOrder");

dbConnect();
app.use(testRouter);
app.use(getProductCatagory);
app.use(getAllProducts);
app.use(productDetail);
app.use(about);
app.use(storeUser);
app.use(user);
app.use(verifyUser);
app.use(changeRole);
app.use(getMyAllProducts);
app.use(completeOrder);
app.use(order);

app.listen(port, () => {
  console.log("server is running");
});
