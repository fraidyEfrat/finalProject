const express = require("express");
const UserRouter=express.Router();

const userController=require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT")

UserRouter.route("/")
    .get(userController.getAllusers)
    .post(userController.addNewUser);

UserRouter.route("/login")
    .post(userController.login);

module.exports=UserRouter;