const express = require("express");
const storeUserControler = require("../../controlers/storeUserControler");
const router = express.Router();
router.put("/store/user/info", storeUserControler);

module.exports = router;
