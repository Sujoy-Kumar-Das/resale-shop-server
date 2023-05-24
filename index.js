const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

const testRouter = require("./src/routers/testRouter");
const getProductCatagory = require("./src/routers/productsRoute/getProductCatagory")
const { dbConnect } = require("./src/models/dataBase/DBConnect");


dbConnect();
app.use(testRouter);
app.use(getProductCatagory)


app.listen(port, () => {
  console.log("server is running");
});
