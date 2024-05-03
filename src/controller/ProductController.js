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
    //return res.status(200).json({total:"100000", name:"repon "});
    try{
        //const {id} = req.params;

        const data = await productModel.find();
        res.json({status: "success", message: "Single product read success ... ", product:data});
    }catch(error){
        res.json({status: "Error", message: "Single product read fail ... "});
    }
}




exports.readSingleProduct= async (req, res)=>{
    try{
        const {id} = req.params;
        const data=await productModel.find({_id:id});
        res.json({status: "success", message: "Single product read success ... ", data:data});
    }catch(error){
        res.json({status: "Error", message: "Single product read fail ... ", error:error});
    }
}




//Update a product based on a specific ID:

exports.updateProduct= async (req, res)=>{
    try{
        const {id} = req.params;
        const reqBody=req.body;
        const data=await productModel.updateOne({_id:id}, reqBody);
        res.json({status: "success", message: "Single product update success ... ", data:data});
    }catch(error){
        res.json({status: "Error", message: "Single product update fail ... ", error:error});
    }
}







//Delete a product based on a specific ID:
exports.deleteProduct= async (req, res)=>{
    try{
        const {id} = req.params;
        const data=await productModel.deleteOne({_id: id });
        
        res.json({status: "success", message: "Single product delete success ... ", data:data});
    }catch(error){
        res.json({status: "Error", message: "Single product delete fail ... "});
    }
}
