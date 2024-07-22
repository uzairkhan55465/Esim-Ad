const express = require("express");
const router = express.Router();
const setting = require("../../controller/setting");
const verifyToken = require("../../middlewares/auth");



// router.post("/single", productcatalog.post);
router.post('/addcompanyinfo', setting.createcompanyInfo);
router.get('/getall', setting.getAll);
router.get('/getbyid', setting.getById); // New route for getting by id
router.delete('/deleteall', setting.deleteAll); // New route for deleting all
router.delete('/deletebyid', setting.deleteById); // New route for deleting by id
router.put('/updatebyid', setting.updateById); // New route for updating by id

module.exports = router;