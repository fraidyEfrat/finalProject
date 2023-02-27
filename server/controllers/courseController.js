const CourseDal=require("../dal/courseDal");
const Article = require("../models/article");


const getAllCourses = async (req, res) => {
    
    const courses = await CourseDal.getAllCoursesDal({});
    console.log(courses) 
    
    console.log(courses?.length) 
    if (!courses?.length) {
        return res.status(400).json({ message: 'No courses found' })
    }
    return res.json(courses);
}


const addNewCourse = async (req, res) => {
    const {lecturer, maxRegesters, cost, numLecture, subject, picture, address, minage, maxage } = req.body
    console.log(req.body);
   
    if (!subject) {
        console.log("ssssss")
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    console.log(subject)
    const course = await CourseDal.addNewCourseDal({lecturer, maxRegesters, cost, numLecture, subject, picture, address, minage, maxage })
    if (course) { 
        return res.status(201).json({ message: 'New course created' })
    } else {
        return res.status(400).json({
            message: 'Invalid course data received'
        })
    }

}

const updateCourseById = async (req, res) => {
    const { idcourse, lecturer, maxRegisters, cost, numLecture, subject, picture, address, minage, maxage } = req.body
    // Confirm data
    
    if (!idcourse) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const course = await CourseDal.updateCourseByIdDal({ idcourse, lecturer, maxRegisters, cost, numLecture, subject, picture, address, minage, maxage } , idcourse )
    if (!course) {
        return res.status(400).json({ message: 'course not found' })
    }
    return res.json(course)
}

const deleteCourseById = async (req, res) => {
    const  idcourse = req.params.idcourse

    if (!idcourse) {
        return res.status(400).json({ message: 'course ID required' })
    }
    await CourseDal.deleteCourseByIdDal(idcourse);
    res.json(`course with ID ${idcourse} deleted`)
}


module.exports = {
    getAllCourses,
    addNewCourse,
    updateCourseById,
    deleteCourseById,
}

