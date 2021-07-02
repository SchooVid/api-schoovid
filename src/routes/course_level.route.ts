import {Router} from "express";
import { CourseController } from "../controllers/course.controller";
import { CourseLevelController } from "../controllers/course_level.controller";

const course_level_router = Router()

//Get every level
course_level_router.get("/", async (req,res) => {
    const courseLevelController : CourseLevelController = CourseLevelController.getInstance();

    try{

        const data = await courseLevelController.getLevel()

        res.status(200).json(data);
        
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_level_router.get("/one/:id", async (req,res) => {
    const courseLevelController : CourseLevelController = CourseLevelController.getInstance();
    const id = req.params.id;

    try{

        const data = await courseLevelController.getOneLevelById(id);

        res.status(200).json(data);
        
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_level_router.post("/create", async (req,res) => {
    const courseLevelController : CourseLevelController = CourseLevelController.getInstance();

    try{
        const data = await courseLevelController.createCourseLevel({...req.body});

        res.status(200).json(data);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_level_router.put("/update/:id", async (req,res) => {
    const courseLevelController : CourseLevelController = CourseLevelController.getInstance();
    const id = req.params.id;

    try{
        const data = await courseLevelController.updateCourseLevel(id,{...req.body});

        res.status(200).json(data);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_level_router.delete("/delete/:id", async (req,res) => {
    const courseLevelController : CourseLevelController = CourseLevelController.getInstance();
    const id = req.params.id;

    try{
        
        await courseLevelController.deleteCourseLevel(id);

        res.status(204).end()
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

export {course_level_router};