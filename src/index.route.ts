import {Router} from "express";
import { users_router } from "./routes/user.route";
import { auth_router } from "./routes/auth.route";
import { course_router } from "./routes/course.route";
import { course_category_router } from "./routes/cours_category.route";
import { course_level_router } from "./routes/course_level.route";
import { course_participant_router } from "./routes/course_participant.route";
import { message_router} from "./routes/message.route";
import { proposed_course_router} from "./routes/proposed_course.route"



const router = Router();

router.use('/user',users_router);
router.use('/auth',auth_router);
router.use('/course',course_router);
router.use('/course_level',course_level_router);
router.use('/course_category',course_category_router);
router.use('/course_participant',course_participant_router);
router.use('/message',message_router);
router.use('/proposed_course',proposed_course_router)



export {router};