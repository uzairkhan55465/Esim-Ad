const express = require("express");
const router = express.Router();
const profile = require("../../controller/profile");
const verifyToken = require("../../middlewares/auth");



// router.post("/single", productcatalog.post);
router.post('/products', verifyToken , profile.createProduct);


module.exports = router;