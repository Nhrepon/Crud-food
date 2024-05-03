const express=require('express');
const productController=require('../controller/ProductController');
const router=express.Router();



router.post("/createProduct", productController.createProduct);
router.get("/readProduct", productController.readProduct);
router.get("/readSingleProduct/:id", productController.readSingleProduct);
router.post("/updateProduct/:id",productController.updateProduct);
router.get("/deleteProduct/:id",productController.deleteProduct);


module.exports = router;