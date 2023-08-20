const { usersCollectons } = require("../../models/dataBase/DBConnect");
const jwt = require("jsonwebtoken");
const jwtControler = async (req, res) => {
  try {
    const email = req.query.email;
    const query = { email: email };
    const user = await usersCollectons.findOne(query);
    if (!user) {
      return res.send({
        success: false,
        message: "Unauthorize access.user not found.",
      });
    }
    const jwtTokken = jwt.sign(email, process.env.jwt_secret);

    if (jwtTokken) {
      res.send({ success: true, jwt_secret: jwtTokken });
    } else {
      res.send({
        success: false,
        message: "unauthorized access.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = jwtControler;
