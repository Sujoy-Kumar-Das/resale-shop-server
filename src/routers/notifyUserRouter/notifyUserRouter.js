const express = require("express");
const verifyNotificationControler = require("../../controlers/verifyNotificationControler/verifyNotificationControler");
const router = express.Router();
router.patch("/notify-user/:id", verifyNotificationControler);

module.exports = router;
