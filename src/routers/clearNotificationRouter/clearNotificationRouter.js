const express = require("express");
const { ObjectId } = require("mongodb");
const { usersCollectons } = require("../../models/dataBase/DBConnect");
const router = express.Router();
router.patch("/clear-notification/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollectons.findOne(query);
    if (!user.noficationVerify) {
      return res.send({
        success: false,
        message: "Notification alreay cleared.",
      });
    }
    const options = { upsert: true };
    const updatedDoc = {
      $set: {
        noficationVerify: undefined,
      },
    };
    const result = await usersCollectons.updateOne(query, updatedDoc, options);
    if (result.acknowledged) {
      res.send({
        success: true,
        message: "Notications cleared.",
      });
    } else {
      res.send({
        success: false,
        message: "Notification clear failed.",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
