import {Router} from "express";
import { CourseController } from "../controllers/course.controller";

const course_router = Router();


//Create course
course_router.post("/",async (req,res) => {
    const courseController : CourseController = CourseController.getInstance();

    const course = await courseController.create({...req.body});
    
    res.status(course.status).json(course);
});

//Get every courses
course_router.get("/all",async (req,res)=> {

    const courseController : CourseController = CourseController.getInstance();

    const courseInfo = await courseController.getAll();
   
    res.status(200).json(courseInfo);
    
});

//Get every courses from one professor
course_router.get("/professor-course", async (req,res) => {

    const id = req.body.id;

    const authController : CourseController = CourseController.getInstance();
    const courseInfo = await authController.getAllCoursesFromAUser(id);

    console.log(courseInfo)

    res.status(courseInfo.status).json(courseInfo);

})

export {course_router};