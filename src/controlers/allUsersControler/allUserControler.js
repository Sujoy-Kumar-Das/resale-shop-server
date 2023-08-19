const { usersCollectons } = require("../../models/dataBase/DBConnect");

const allUsersControler = async (req, res) => {
  try {
    const query = {};
    const result = await usersCollectons.find(query).toArray();
    if (result.length) {
      return res.send({
        success: true,
        users: result,
      });
    } else {
      res.send({
        success: false,
        message: "users not found",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "all users server error.",
    });
  }
};

module.exports = allUsersControler;
