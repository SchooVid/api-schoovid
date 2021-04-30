import {Router} from "express";
import { users_router } from "./routes/user.route";
import { auth_router } from "./routes/auth.route";



const router = Router();

router.use('/user',users_router);
router.use('/auth',auth_router);


export {router};