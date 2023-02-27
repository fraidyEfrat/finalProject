const express = require("express");
const UserRouter=express.Router();

const userController=require("../controllers/userController");
const verifyJWT = require("../middleware/verifyJWT")

UserRouter.route("/")
    .get(userController.getAllusers)

module.exports=UserRouter;