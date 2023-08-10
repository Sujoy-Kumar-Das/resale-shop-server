const { usersCollectons } = require("../../models/dataBase/DBConnect");

const getUserControler = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const user = await usersCollectons.findOne(query);
    if (user?.email) {
      res.send({
        success: true,
        user,
      });
    } else {
      res.send({
        success: false,
        user: {},
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUserControler;
