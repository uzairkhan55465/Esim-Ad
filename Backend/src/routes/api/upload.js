const express = require("express");
const router = express.Router();
const { upload } = require("../../config/upload");
const uploadOnFirebase = require("../../controller/upload");

router.post("/single", upload.single("image"), uploadOnFirebase.uploadSingle);
router.post("/multiple",upload.array("images"), uploadOnFirebase.uploadMultiple);
router.post("/delete", uploadOnFirebase.delete);

module.exports = router;