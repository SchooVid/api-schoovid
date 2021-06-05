import { getRepository, Repository } from "typeorm";
import { User, UserProps } from "../models/user.model";
import { sign } from "jsonwebtoken";

export class AuthController {

    private static instance : AuthController;
    

    public static getInstance(){

        if(AuthController.instance === undefined)
        {
            AuthController.instance = new AuthController();
        }

        return AuthController.instance;
    }

    public async signIn(props:UserProps) : Promise<any>{

        const userRepository = getRepository(User);
        const username = props.username ? props.username : null;

        let user : User;
        let errorMessage : String;
        let status = 200;

        //Recherche de l'existence du user
        try{
            user = await userRepository.findOneOrFail({
                username
            });

            const token = sign({id:user.id}, process.env.JWT_KEY || "hardwebtoken",{expiresIn: 86400});
            const id    = user.id;
            
            return {
                status : status,
                id : id,
                username : username,
                token : token,
                errorMessage : errorMessage
            };
        }
        catch(e)
        {
            errorMessage = "Identifiant ou mot de passe introuvable"
            status = 400;
            
            return {
                status : status,
                errorMessage : errorMessage
            };
        }

       

    }
}