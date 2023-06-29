const Users=require("./../models/user.models");

class userService{
    async getUsers(){
        try{
            const users=await Users.find();
            return users;
        }catch(err){
            console.log(err,"err")
        }
    }

    async createUser(data){
        try{
         const user=await Users.create(data);
         return user;
        }catch(Error){
         console.log(Error)
        }
    }

    async updateUser(id,data){
        try{
            const user=await Users.findByIdAndUpdate(id,data,{new:true});
            return user;
        }catch(Error){
            console.log(Error)
        }
    }
}
 
module.exports=userService
