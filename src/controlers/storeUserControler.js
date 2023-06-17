const { usersCollectons } = require("../models/dataBase/DBConnect");

const storeUserControler = async (req, res) => {
  try {
    const userInfo = req.body;
    const email = req.query.email;
    const query = { email: email };
    const user = await usersCollectons.findOne(query);
    if (!user?.email) {
      const result = await usersCollectons.insertOne(userInfo);
      if (result.acknowledged) {
        res.send({
          success: true,
          message: "user created successfully",
        });
      }
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