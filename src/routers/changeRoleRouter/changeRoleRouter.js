const express = require("express");
const changeRoelControler = require("../../controlers/changeRoleContainer/ChangeRoleControler");
const router = express.Router();
router.patch("/change/role", changeRoelControler);

module.exports = router;
