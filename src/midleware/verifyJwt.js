const jwt = require("jsonwebtoken");
const verifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.send({
      success: false,
      message: "Unauthorized access",
    });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.jwt_secret, (error, decoded) => {
    if (error) {
      return res.send({
        success: false,
        message: "Forbiden Access.",
      });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyJwt;
