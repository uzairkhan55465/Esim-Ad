const express = require("express");
const router = express.Router();
const productcatalog = require("../../controller/productcatalog");
const verifyToken = require("../../middlewares/auth");



// router.post("/single", productcatalog.post);
router.post('/products', verifyToken , productcatalog.createProduct);
router.get('/products',  productcatalog.getAllProducts);
router.get('/productsbyid',  productcatalog.getProductById);
router.put('/products', verifyToken , productcatalog.updateProductById);
router.delete('/productsDeleteAll', verifyToken , productcatalog.deleteAllProducts);
router.delete('/productsDeletebyId', verifyToken , productcatalog.deleteProductById);
router.get('/productsSold',  productcatalog.totalProductSold);

module.exports = router;