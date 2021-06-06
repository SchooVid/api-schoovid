import {Router} from "express";
import { users_router } from "./routes/user.route";
import { auth_router } from "./routes/auth.route";
import { course_router } from "./routes/course.route";



const router = Router();

router.use('/user',users_router);
router.use('/auth',auth_router);
router.use('/course',course_router);


export {router};