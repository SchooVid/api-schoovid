import {Router} from "express";
import { UserController } from "../controllers/user.controller";

const users_router = Router();

users_router.get("/all",async (req,res) => {

    const userController : UserController = UserController.getInstance();

    res.json(await userController.getAll());

});

users_router.post("/",async (req,res)=> {

    const userController = UserController.getInstance();

    try {
        const user = await userController.create({...req.body});

        res.json(user);
    }
    catch(e)
    {
        res.status(400).send(e);
    }


})


export {users_router};