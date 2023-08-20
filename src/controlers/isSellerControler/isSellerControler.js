const { usersCollectons } = require("../../models/dataBase/DBConnect");

const isSellerControler = async (req, res) => {
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
    if (user?.role === "seller") {
       res.send({
        success: true,
        message: "Your are seller.",
      });
    } else {
      res.send({
        success: false,
        message: "You are not seller.",
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: "seller check server error.",
    });
  }
};

module.exports = isSellerControler;
