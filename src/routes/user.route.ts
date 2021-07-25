import {Router} from "express";
import { UserController } from "../controllers/user.controller";

const users_router = Router();

users_router.get("/all",async (req,res) => {

    const userController : UserController = UserController.getInstance();

    res.json(await userController.getAll());
});

users_router.get("/all/professeur",async (req,res) => {

    const userController : UserController = UserController.getInstance();

    res.json(await userController.getAllProfessor());
});

users_router.get("/:id",async (req,res) => {

    const userController : UserController = UserController.getInstance();

    const id = req.params.id ?? ""

    res.json(await userController.getOneUserById(id));
});

users_router.patch("/",async (req,res) => {

    const userController = UserController.getInstance();

    try {
        let errorMessage = "";
        let status = 200;
        
        if(req.body.user == undefined)
        {
            errorMessage = "Veuillez entrer les infos";
            status = 400;
            const response = {
                "errorMessage" : errorMessage,
                "status" : status
            };

            res.status(status).send(response)
        }

        if(req.body.id == undefined || req.body.id.length == 0)
        {
            errorMessage = "Veuillez entrer un ID";
            status = 400;
        }

        if(req.body.user.username == undefined || req.body.user.username.length < 4)
        {
            errorMessage = "Votre nom d'utilisateur doit contenir 4 caractères ou plus";
            status = 400;
        }
        if(req.body.user.firstname == undefined || req.body.user.firstname.length == 0 )
        {
            console.log(req.body.user.firstname == undefined)
            errorMessage = "Veuillez entrer un prenom";
            status = 400;
        }

        if(req.body.user.lastname == undefined || req.body.user.lastname.length == 0 )
        {
            errorMessage = "Veuillez entrer un nom";
            status = 400;
        }

        if(req.body.user.role == undefined || req.body.user.role.length == 0)
        {
            errorMessage = "Veuillez entrer un role";
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

        const modifiedUser = await userController.update(req.body.id,{...req.body.user})

        res.status(status).json(modifiedUser)

    } catch(e)
    {
        res.status(400).send(e);
    }

});

users_router.delete("/",async (req,res)=> {

    const userController = UserController.getInstance();

    try {
        let errorMessage = "";
        let status = 200;

        if(req.body.id == undefined || req.body.id.length == 0)
        {
            errorMessage = "Veuillez entrer un ID";
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

        const modifiedUser = await userController.delete(req.body.id)

        if(modifiedUser){
            res.status(status).json({"Success":true})
        }
        else{
            res.status(400).json({"Status":400,"errorMessage":"Id inconnu"})
        }


    } catch (e)
    {
        res.status(400).send(e);
    }
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