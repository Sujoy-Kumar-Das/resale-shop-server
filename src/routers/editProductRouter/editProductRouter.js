const express = require("express");
const editProductControler = require("../../controlers/editProductControler/EditProductControler");
const router = express.Router();
router.put("/edit", editProductControler);
module.exports = router;
