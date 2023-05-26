const { aboutCollection } = require("../models/dataBase/DBConnect");
const aboutControler = async (req, res) => {
  try {
    const query = {};
    const result = await aboutCollection.find(query).toArray();
    if (result.length) {
      res.send({
        success: true,
        about: result,
      });
    } else {
      res.status(404).send({
        success: false,
        message: "Data not found",
        about: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = aboutControler;
