const express=require("express");
const userRoute=require('./routes/user.routes');
const app=express();
app.use(express.json());

app.use("/",(req,res)=>{
    res.send("Hii Pummy ")
})

app.listen(3000,async()=>{
    console.log("listening on server 3000");
})

module.exports=app;