const mongoose=require("mongoose")

const post_Schema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Post=mongoose.model("post",post_Schema)

module.exports=Post