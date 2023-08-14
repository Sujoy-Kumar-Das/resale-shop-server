const express = require("express");
const deleteControler = require("../../controlers/deleteControler/DeleteControler");
const router = express.Router();
router.delete("/delete/:id", deleteControler);
module.exports = router;
