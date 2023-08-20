const express = require("express");
const uploadProductControler = require("../../controlers/uploadProductControler/uploadProductControler");
const router = express.Router();
router.post("/upload-product", uploadProductControler);

module.exports = router;
