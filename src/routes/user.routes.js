const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const userController=new UserController();

const route=Router();

route.get("/",userController.getAllUsers);
route.post("/create_user",userController.createUser);
route.patch("/update_user/:id",userController.updateUserDetail);

module.exports=route;
