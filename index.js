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
// upload product
const uploadProduct = require("./src/routers/uploadProductRouter/uploadProductRouter");
// store user
const storeUser = require("./src/routers/storeUser/StoreUser");
// get user
const user = require("./src/routers/getUserRouter/getUserRouter");
// notify user
const notifyUser = require("./src/routers/notifyUserRouter/notifyUserRouter");
// get all users
const getAllUsers = require("./src/routers/allUsers/allUsers");
// verify user
const verificationRequest = require("./src/routers/verificationRequestRouter/verificationRequestRouter");
//accept verification router
const acceptVerification = require("./src/routers/acceptVerificationRouter/acceptVerificationRouter");
// declien verification
const declieVerification = require("./src/routers/declineVerificationRouter/declineVerificaionRouter");
// retract Verification Router
const retractVerification = require("./src/routers/retractVerificationRouter/retractVerificationRouter");
// change role
const changeRole = require("./src/routers/changeRoleRouter/changeRoleRouter");
// get my all products
const getMyAllProducts = require("./src/routers/MyProductsRouter/MyProductRouter");
// complete order api
const completeOrder = require("./src/routers/completeOrderRouter/CompleteOrderRouter");
// edit product
const editProduct = require("./src/routers/editProductRouter/editProductRouter");
// delete product
const deleteProduct = require("./src/routers/deleteProductRouter/DeleteProductRouter");
// about api
const about = require("./src/routers/about/about");
// post order
const storeOrder = require("./src/routers/storeOrders/StoreOrder");
// get orders
const getMyOrders = require("./src/routers/myOrderRouter/MyOrderRouter");
// cancel order
const cancelOrder = require("./src/routers/cancelOrderRouter/CancelOrderRouter");
// payment method intent api
const paymentMethodIntent = require("./src/routers/paymentStripeRouter/PaymentStripeRouter");
// store payment info
const storePaymentInfo = require("./src/routers/storePaymentInfoRouter/storePaymentInfoRouter");
// clear notification api
const clearNotification = require("./src/routers/clearNotificationRouter/clearNotificationRouter");
// is admin api
const isAdmin = require("./src/routers/useAdminRouter/useAdminRouter");
// is buyer check
const isSeller = require("./src/routers/isSellerRouter/isSeller");
// jwt token get
const getJwtToken = require("./src/routers/jwt/jwt");
dbConnect();

app.use(testRouter);
app.use(getProductCatagory);
app.use(getAllProducts);
app.use(productDetail);
app.use(uploadProduct);
app.use(about);
app.use(storeUser);
app.use(user);
app.use(getAllUsers);
app.use(notifyUser);
app.use(verificationRequest);
app.use(acceptVerification);
app.use(declieVerification);
app.use(retractVerification);
app.use(changeRole);
app.use(getMyAllProducts);
app.use(completeOrder);
app.use(editProduct);
app.use(deleteProduct);
app.use(storeOrder);
app.use(getMyOrders);
app.use(cancelOrder);
app.use(paymentMethodIntent);
app.use(storePaymentInfo);
app.use(clearNotification);
app.use(isAdmin);
app.use(isSeller);
app.use(getJwtToken);
app.listen(port, () => {
  console.log("server is running");
});
