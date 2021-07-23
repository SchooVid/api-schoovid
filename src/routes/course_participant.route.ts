import {Router} from "express";
import { CourseParticipantController} from "../controllers/course_participants.controller";
import { CourseLevelController } from "../controllers/course_level.controller";

const course_participant_router = Router();


//Get every participants from a course
course_participant_router.get("/", async (req,res) => {
    const courseParticipantController : CourseParticipantController = CourseParticipantController.getInstance();

    try{

        const data = await courseParticipantController.getCourseParticipant()

        res.status(200).json(data);
        
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

//Add a participant in a course
course_participant_router.post("/add", async (req,res) => {
    const courseParticipantController : CourseParticipantController = CourseParticipantController.getInstance();

    try{

        const data = await courseParticipantController.addCourseParticipant({...req.body});

        res.status(200).json(data);
        
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});


course_participant_router.delete("/delete", async (req,res) => {
    const courseParticipantController : CourseParticipantController = CourseParticipantController.getInstance();

    try{

        const id = req.param.id ?? "";

        await courseParticipantController.removeCourseParticipant(id)

        res.status(201).end();
        
    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

course_participant_router.post("/one", async (req,res) => {
    const courseParticipantController : CourseParticipantController = CourseParticipantController.getInstance();

    try {

        const userId = req.param.userId ?? "";
        const participantId = req.param.participantId ?? "";

        const data = courseParticipantController.participantCanViewCourse(userId,participantId);

        res.status(200).json(data);

    }
    catch(err)
    {
        res.status(400).json(err);
    }
});

export {course_participant_router}