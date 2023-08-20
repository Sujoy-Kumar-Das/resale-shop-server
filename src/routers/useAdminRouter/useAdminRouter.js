const express = require("express");
const useAdminControler = require("../../controlers/useAdminControler/useAdminControler");
const router = express.Router();
router.get("/user/admin/:email",useAdminControler);

module.exports = router;
