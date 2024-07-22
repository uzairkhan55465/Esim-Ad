const express = require("express");
const router = express.Router();
const Managestatus = require("../../controller/managestatus");
const verifyToken = require("../../middlewares/auth");

// router.post("/single", productcatalog.post);
router.post('/managestatus', Managestatus.Managestatus);

module.exports = router;