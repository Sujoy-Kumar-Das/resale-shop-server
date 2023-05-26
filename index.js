const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
app.use(cors())
const port = process.env.PORT || 5000;

const testRouter = require("./src/routers/testRouter");
const getProductCatagory = require("./src/routers/productsRoute/getProductCatagory");
const about = require("./src/routers/about/about")
const { dbConnect } = require("./src/models/dataBase/DBConnect");

dbConnect();
app.use(testRouter);
app.use(getProductCatagory);
app.use(about)

app.listen(port, () => {
  console.log("server is running");
});
