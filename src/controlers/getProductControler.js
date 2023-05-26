const {
    productsCatagoryCollection,
  } = require("../models/dataBase/DBConnect");
  
const getProductControler = async (req, res) => {
  try {
    const query = {};
    const limitStr = req.query.view;
    const limit = parseInt(limitStr);

    const result = await productsCatagoryCollection
      .find(query)
      .limit(limit)
      .toArray();
    const count = await productsCatagoryCollection.estimatedDocumentCount();
    if (result.length) {
      return res.send({
        success: true,
        productsCatagory: result,
        count,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = getProductControler;
