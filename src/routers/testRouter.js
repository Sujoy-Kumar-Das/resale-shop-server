const express = require("express");
const testControler = require("../controlers/testControlers");
const router = express.Router();
// test server
router.get("/", testControler);
module.exports=router;