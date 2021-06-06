import {Router} from "express";
import { CourseController } from "../controllers/course.controller";

const course_router = Router();


//Create course
course_router.post("/",async (req,res) => {
    const courseController : CourseController = CourseController.getInstance();

    const course = await courseController.create({...req.body});
    
    res.status(200).json(course);
});

//Get every courses
course_router.get("/all",async (req,res)=> {

    const authController : CourseController = CourseController.getInstance();

    const courseInfo = await authController.getAll();
   
    res.status(200).json(courseInfo);
    
});

export {course_router};