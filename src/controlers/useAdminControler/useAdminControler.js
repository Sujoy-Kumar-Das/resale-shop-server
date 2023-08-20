const { usersCollectons } = require("../../models/dataBase/DBConnect");

const useAdminControler = async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const user = await usersCollectons.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        message: "User not found.",
      });
    }
    if (user?.role === "Admin") {
      res.send({
        success: true,
        message: "Your are admin",
      });
    } else {
      res.send({
        success: false,
        message: "You are not admin.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "admin check server error.",
    });
  }
};

module.exports = useAdminControler;
