const {Schema,model, default: mongoose}=require("mongoose");

const recipeSchema=new Schema(
    {
        title:{type:String,required:true},
        description:{type:String,required:true},
        prepTime:{
            type:Number
        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"category",
            required:true
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports=model("recipe",recipeSchema);