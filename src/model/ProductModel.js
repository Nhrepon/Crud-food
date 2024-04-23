const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    foodName:{type:String},
    foodCode:{type:String},
    foodImage:{type:String},
    foodCategory:{type:String},
    qty:{type:String},
    price:{type:String}
},{
    timestamps:true, versionKey:false
});
const productModel=mongoose.model('products', databaseSchema);
module.exports=productModel;