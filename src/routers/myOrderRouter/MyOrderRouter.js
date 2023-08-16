const express = require("express");
const { ordersCollections } = require("../../models/dataBase/DBConnect");
const router = express.Router();
router.get("/myOrders", async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const result = await ordersCollections.find(query).toArray();
    if (result.length) {
      return res.send({
        success: true,
        orders: result,
      });
    }
    res.send({
      success: false,
      message: "You dont have any order now.",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "my orders server error",
    });
  }
});

module.exports = router;
