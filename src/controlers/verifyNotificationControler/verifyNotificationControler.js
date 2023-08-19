const { ObjectId } = require("mongodb");
const { usersCollectons } = require("../../models/dataBase/DBConnect");

const verifyNotificationControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollectons.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        message: " Sorry user not found.",
      });
    }
    if (user.noficationVerify) {
      return res.send({
        success: false,
        message: "Already notifed.",
      });
    }
    const options = { upsert: true };
    const updatedDoc = {
      $set: {
        noficationVerify: "Please verify your account for more reach.",
      },
    };
    const result = await usersCollectons.updateOne(query, updatedDoc, options);
    if (result.acknowledged) {
      res.send({
        success: true,
        message: "Notification send successfully.",
      });
    } else {
      res.send({
        success: false,
        message: "Verification notification send faild.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "verification notification server error.",
    });
  }
};

module.exports = verifyNotificationControler;
