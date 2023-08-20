const { usersCollectons } = require("../../models/dataBase/DBConnect");

const verifyControler = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        verified: "requested",
      },
    };
    const user = await usersCollectons.findOne(query);
    // console.log(user.verified === true)
    if (user?.verified !== true) {
      const result = await usersCollectons.updateOne(query, updateDoc, options);
      if (result.acknowledged) {
        res.send({
          success: true,
          message: "Your verification request had been Send successfully.",
        });
      }
    } else {
      res.send({
        success: false,
        message: "Verify request already send",
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = verifyControler;
