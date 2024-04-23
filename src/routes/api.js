const express=require('express');
const productController=require('../controller/ProductController');
const router=express.Router();



router.post("/createProduct",productController.createProduct);
router.get("/readProduct",productController.readProduct);


module.exports = router;