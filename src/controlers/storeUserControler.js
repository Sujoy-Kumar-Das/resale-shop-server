const { usersCollectons } = require("../models/dataBase/DBConnect");

const storeUserControler = async (req, res) => {
  try {
    const userInfo = req.body;
    const email = req.query.email;
    const filter = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: userInfo,
    };
    const result = await usersCollectons.updateOne(filter, updateDoc, options);
    if (result.acknowledged || result.modifiedCount) {
      res.send({
        success: true,
        result,
      });
    } else {
      res.send({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = storeUserControler;
