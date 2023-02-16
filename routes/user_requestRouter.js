const express = require("express");
const User_RequestRouter=express.Router();

const user_requestController=require("../controllers/user_requestController");

User_RequestRouter.route("/")
    .get(user_requestController.getAllUser_Requests)
    .post(user_requestController.addNewUser_Request);
    
User_RequestRouter.route("/:iduser_request")
    .delete(user_requestController.deleteUser_RequestById)
    .put(user_requestController.updateUser_RequestById);
// const articleRouter=new User_RequestRouter();
module.exports=User_RequestRouter;