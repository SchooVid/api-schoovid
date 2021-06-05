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
        //Control values
        let errorMessage = "";
        let status = 200;

        //Values received
        let username = req.body.username;
        let password = req.body.password;

        if(username == undefined || password == undefined)
        {
            errorMessage = "Les paramètres sont invalides";
            status = 400;
        }

        if(username.length < 4)
        {
            errorMessage = "Votre nom d'utilisateur doit contenir 4 caractères ou plus";
            status = 400;
        }


        if(password.length < 8)
        {
            errorMessage = "Votre mot de passe doit contenir 8 caractères ou plus";
            status = 400;
        }

        if(errorMessage.length > 0)
        {
            const response = {
                "errorMessage" : errorMessage,
                "status" : status
            };

            res.status(status).send(response)
        }

        const user = await userController.create({...req.body});

        res.status(status).json(user);
    }
    catch(e)
    {
        res.status(400).send(e);
    }


})


export {users_router};