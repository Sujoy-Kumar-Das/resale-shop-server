const express = require("express");
const allUsersControler = require("../../controlers/allUsersControler/allUserControler");
const router = express.Router();
router.get("/all-users", allUsersControler);
module.exports = router;
