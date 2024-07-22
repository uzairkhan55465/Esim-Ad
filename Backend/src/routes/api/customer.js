const express = require("express");
const router = express.Router();
const Customer = require("../../controller/customer");
const verifyToken = require("../../middlewares/auth");

// router.post("/single", productcatalog.post);
router.post('/addcompanyinfo', Customer.createcompanyInfo);
router.get('/getall', Customer.getAll);
router.get('/getbyid', Customer.getById); // New route for getting by id
router.delete('/deleteall', Customer.deleteAll); // New route for deleting all
router.delete('/deletebyid', Customer.deleteById); // New route for deleting by id
router.put('/updatebyid', Customer.updateById); // New route for updating by id



module.exports = router;