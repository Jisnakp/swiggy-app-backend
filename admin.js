const mongoose=require("mongoose")
const LoginSchema=mongoose.Schema(
    {   name:String,
        username:String,
        password:String
    }
)
const loginModel=mongoose.model("logindata",LoginSchema)
module.exports=loginModel