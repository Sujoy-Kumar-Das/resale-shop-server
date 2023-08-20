const { ObjectId } = require("mongodb");
const { usersCollectons } = require("../../models/dataBase/DBConnect");

const verificationRetractControler = async (req, res) => {
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
    if (user.verified === "retract") {
      return res.send({
        success: false,
        message: `${user.name}'s verification already retract.`,
      });
    }
    if (user.verified === true) {
      const options = { upsert: true };
      const updatedDoc = {
        $set: {
          verified: "retract",
          noficationVerify: "Your verification has been retracted.",
        },
      };
      const result = await usersCollectons.updateOne(
        query,
        updatedDoc,
        options
      );
      if (result.acknowledged) {
        res.send({
          success: true,
          message: `${user.name} verification has been retracted.`,
        });
      } else {
        res.send({
          success: false,
          message: "Verification retracted failed. ",
        });
      }
    }
  } catch (error) {
    res.send({
      success: false,
      message: "Verification retracted server error.",
    });
  }
};

module.exports = verificationRetractControler;
