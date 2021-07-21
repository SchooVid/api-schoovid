import {Router} from "express";
import { ProposedCourseController } from "../controllers/proposed_course.controller";

const proposed_course_router = Router();

proposed_course_router.get('/all', async (req,res) => {
    const proposedCourseController : ProposedCourseController = ProposedCourseController.getInstance();

    try{
        const data  = await proposedCourseController.getAllProposedCourse();

        res.status(200).json(data);
    }
    catch(e)
    {
        res.status(400).json(e);
    }
});

proposed_course_router.get('/:id', async (req,res) => {
    const proposedCourseController : ProposedCourseController = ProposedCourseController.getInstance();
    const id = req.params.id ?? "";

    try{


        const data  = await proposedCourseController.getOneProposedCourse(id);

        res.status(200).json(data);
    }
    catch(e)
    {
        res.status(400).json(e);
    }
});

proposed_course_router.post('/create', async (req,res) => {
    const proposedCourseController : ProposedCourseController = ProposedCourseController.getInstance();

    try{

        const data  = await proposedCourseController.proposeCourse({...req.body});

        res.status(200).json(data);
    }
    catch(e)
    {
        res.status(400).json(e);
    }
});

proposed_course_router.delete('/:id', async (req,res) => {
    const proposedCourseController : ProposedCourseController = ProposedCourseController.getInstance();
    const id = req.params.id ?? "";

    try{
        await proposedCourseController.deleteProposedCourse(id);

        res.status(201).json({code: '201'});
    }
    catch(e)
    {
        res.status(400).json(e);
    }
});


export {proposed_course_router};