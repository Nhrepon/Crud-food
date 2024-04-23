const productModel = require('../model/ProductModel');

exports.createProduct= async (req, res)=>{
    try{
        const reqBody = req.body;
        await productModel.create(reqBody);
        res.json({status: "success", message: "Product create success ... "});
    }catch(error){
        res.json({status: "Error", message: "Product create fail ... "});
    }
}





//Read the data of a single product:

exports.readProduct= async (req, res)=>{
    try{
        //const {id} = req.params;
        const data = await productModel.find();
        res.json({status: "success", message: "Single product read success ... ", data:data});
    }catch(error){
        res.json({status: "Error", message: "Single product read fail ... "});
    }
}



//Delete a product based on a specific ID:

exports.deleteSingleProduct= async (req, res)=>{
    try{
        const {id} = req.params;
        await productModel.deleteOne({_id: id }); 
        
        res.json({status: "success", message: "Single product delete success ... "});
    }catch(error){
        res.json({status: "Error", message: "Single product delete fail ... "});
    }
}





//Update a product based on a specific ID:

exports.updateSingleProduct= async (req, res)=>{
    try{
        const {id} = req.params;
        await productModel.updateOne({_id:id}, reqBody);
        res.json({status: "success", message: "Single product update success ... "});
    }catch(error){
        res.json({status: "Error", message: "Single product update fail ... "});
    }
}