const {Schema,model}=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        mobileNumber:{type:Number,required:true},
        countryCode:{
            type:String,
            required:true,
            default:"+91"
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

userSchema.pre("save",function(next) {
    if(!this.isModified("password"))return next();

    
    bcrypt.hash(this.password, 8, (err, hash)=> {
        this.password=hash;
        return next();
    });
    
})


module.exports=model("user",userSchema);