const express = require("express");
const CourseRouter=express.Router();

const courseController=require("../controllers/courseController");


CourseRouter.route("/")
    .get(courseController.getAllCourses)
    .post(courseController.addNewCourse)
    .put(courseController.updateCourseById);

CourseRouter.route("/:idcourse")
    .delete(courseController.deleteCourseById);


module.exports=CourseRouter;