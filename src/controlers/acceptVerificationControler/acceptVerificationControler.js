const { ObjectId } = require("mongodb");
const { usersCollectons } = require("../../models/dataBase/DBConnect");

const acceptVerificationControler = async (req, res) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const user = await usersCollectons.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        message: "User not found.",
      });
    }
    if (user.verified === true) {
      return res.send({
        success: false,
        message: "user already verified.",
      });
    }
    const options = { upsert: true };
    const updatedDoc = {
      $set: {
        verified: true,
      },
    };
    const result = await usersCollectons.updateOne(query, updatedDoc, options);
    if (result.acknowledged) {
      res.send({
        success: true,
        message: `${user?.name} verified successfully.`,
      });
    } else {
      res.send({
        success: false,
        message: "verification faild.Try again latter.",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "accept verification server error.",
    });
  }
};

module.exports = acceptVerificationControler;
