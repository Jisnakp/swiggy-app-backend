const express=require("express")
const mongoose=require("mongoose")
const bcrypt =require("bcrypt")
const cors=require("cors")
const loginModel = require("./admin")
const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://jisnab01:jisnab01@cluster0.tnvz6eq.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")
app.get("/test",(req,res)=>{

    res.json({"status":"success"})
})


app.post("/adminSignup",(req,res)=>{

let input=req.body
let hashedpassword=bcrypt.hashSync(input.password,10)
input.password=hashedpassword
console.log(input)
let result=new loginModel(input)
result.save()
res.json({"status":"success"})

//console.log(hashedpassword)



})
app.listen(5050,()=>{
    console.log("server started")
})