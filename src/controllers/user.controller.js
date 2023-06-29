
const UserService=require('./../services/user.service');
const userService=new UserService()

class userController{
    async getAllUsers(req, res){
        try {
            const users = await userService.getUsers();
            res.status(200).json({ data: users, message: 'get all users', status: 'SUCCESS' })
        } catch (err) {
            console.log(err, "err")
        }
    }

    async createUser(req, res){
        try {
            const users = await userService.createUser(req.body);
            res.status(200).json({ data: users, message: 'user created', status: 'SUCCESS' })
        } catch (err) {
            console.log(err, "err")
        }
    }

    async updateUserDetail(req,res){
        const body=req.body;
        const id=req.params.id;
        console.log(id,"id")
        try {
            const users = await userService.updateUser(id,body);
            res.status(200).json({ data: users, message: 'user created', status: 'SUCCESS' })
        } catch (err) {
            console.log(err, "err")
        }
    }
}

module.exports=userController