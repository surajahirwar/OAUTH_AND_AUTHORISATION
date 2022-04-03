const mongoose=require("mongoose")

const product_Schema=mongoose.Schema({
    title:{type:String,required:true},
    price:{type:String,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Product=mongoose.model("product",product_Schema)

module.exports=Product