import {Router} from "express";
import { CourseController } from "../controllers/course.controller";
import { CourseCategoryController } from "../controllers/course_category.controller";

const course_category_router = Router()

course_category_router.get("/",async(req,res) => 
{
    const courseController : CourseCategoryController = CourseCategoryController.getInstance();

    try{
        const courseCategory = await courseController.getCategory();
        
        res.status(200).json(courseCategory);
    }
    catch(err)
    {
        res.status(400).json(err)
    }
});

course_category_router.get("/one/:id", async(req,res) => {
    const courseController : CourseCategoryController = CourseCategoryController.getInstance();

    const id = req.params.id;
    try{
        const courseCategory = await courseController.getOneCategoryById(id);

        return courseCategory;

    }
    catch(err)
    {
        res.status(200).json(err)
    }
});

course_category_router.post("/create", async (req,res) => {
    const courseController : CourseCategoryController = CourseCategoryController.getInstance();

    try
    {
        const data = await courseController.createCourseCategory({...req.body});

        res.status(200).json(data);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_category_router.put("/update/:id", async (req,res) => {

    const courseController : CourseCategoryController = CourseCategoryController.getInstance();

    const id = req.params.id;

    try {
        const data = await courseController.updateCourseCategory(id,{...req.body});

        res.status(200).json(data);
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_category_router.delete("/delete/:id", async (req,res) => {
    const courseController : CourseCategoryController = CourseCategoryController.getInstance();

    const id = req.params.id;

    try{
        await courseController.deleteCourseCategory(id);

        res.json(204).end()
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});