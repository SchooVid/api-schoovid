import {Router} from "express";
import { users_router } from "./routes/user.route";



const router = Router();

router.use('/user',users_router);



export {router};