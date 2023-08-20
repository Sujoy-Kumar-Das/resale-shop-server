const { ObjectId } = require("mongodb");
const { usersCollectons } = require("../../models/dataBase/DBConnect");

const declieVerificationControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollectons.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        message: "User not found",
      });
    }
    if (user.verified === "canceled") {
      return res.send({
        success: false,
        message: "verification request already canceled.",
      });
    }
    const options = { upsert: true };
    const updatedDoc = {
      $set: {
        verified: "canceled",
        noficationVerify:
          "Your verification declined.Please provide original documents.",
      },
    };
    const result = await usersCollectons.updateOne(query, updatedDoc, options);
    if (result.acknowledged) {
      res.send({
        success: `${user?.name}'s verify request caneled successfully.`,
      });
    } else {
      res.send({
        success: false,
        message: "Verification decline faild.Try again later.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Verification reqest decline server error.",
    });
  }
};

module.exports = declieVerificationControler;
