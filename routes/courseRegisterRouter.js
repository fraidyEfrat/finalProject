const express = require("express");
const CourseRegisterRouter=express.Router();

const CourseRegisterController=require("../controllers/courseRegisterController");


 CourseRegisterRouter.route("/")
      .get(CourseRegisterController.getAllCourseRegisters)
      .post(CourseRegisterController.addNewCourseRegister);
     
CourseRegisterRouter.route("/:idcourseRegister")
     .delete(CourseRegisterController.deletecourseRegisterById);


module.exports=CourseRegisterRouter;