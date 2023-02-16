const express = require("express");
const UserRouter=express.Router();

const userController=require("../controllers/userController");


UserRouter.route("/")
    .get(userController.getAllusers)

module.exports=UserRouter;