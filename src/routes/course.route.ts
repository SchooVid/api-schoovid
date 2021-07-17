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

//Get one course depending on the id
course_router.get("/description/:id", async (req, res) => {

    const id = req.params.id;

    try{

        const courseController : CourseController = CourseController.getInstance()
        const courseInfo = await courseController.getOneCoursebyId(id);

        res.status(200).json(courseInfo)
    }
    catch(e)
    {
        res.status(400).json(e);
    }
})

//Get every courses from one professor
course_router.get("/professor-course/:id", async (req,res) => {

    const id = req.params.id;

    const courseController : CourseController = CourseController.getInstance();
    const courseInfo = await courseController.getAllCoursesFromAUser(id);

    res.status(200).json(courseInfo);

})

//Delete one course depending on the id
course_router.delete("/delete/:id", async (req,res) => {
    try {
        const id = req.params.id

        const courseController : CourseController = CourseController.getInstance();
        await courseController.delete(id)

        res.status(204).end()
    }
    catch (err)
    {
        res.status(400).json(err)
    }
})

course_router.put("/update/:id", async(req,res) => {
    try {

        const id = req.params.id
        const courseController : CourseController = CourseController.getInstance();
        const data = await courseController.update(id,{...req.body});

        res.status(200).json(data);

    }
    catch(err)
    {
        res.status(400).json(err);
    }
})

export {course_router};