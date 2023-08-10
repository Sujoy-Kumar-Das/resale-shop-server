const express = require("express");
const { usersCollectons } = require("../../models/dataBase/DBConnect");
const router = express.Router();
router.patch("/change/role", async (req, res) => {
  try {
    const email = req.query.email;
    const body = req.body;
    const query = { email: email };
    const optinos = { upsert: true };
    const updatedDoc = {
      $set: body,
    };
    const result = await usersCollectons.updateOne(query, updatedDoc, optinos);
    if (result.acknowledged) {
      res.send({
        success: true,
        message: `Your role updated as a ${body?.role}`,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Role change error",
    });
  }
});

module.exports = router;
