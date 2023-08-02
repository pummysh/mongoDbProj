const {Schema,model}=require("mongoose");

const categorySchema=new Schema(
    {
        categroryName:{type:String,required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports=model("category",categorySchema);