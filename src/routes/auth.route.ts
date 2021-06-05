import {Router} from "express";
import { AuthController } from "../controllers/auth.controller";

const auth_router = Router();

auth_router.post("/signin",async (req,res)=> {

    const authController : AuthController = AuthController.getInstance();

    const loginInfo = await authController.signIn({...req.body});
   
    res.status(loginInfo.status).json(loginInfo);
    
});

export {auth_router};