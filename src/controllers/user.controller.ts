import { hash } from "bcrypt";
import { getRepository, Repository } from "typeorm";
import { User, UserProps } from "../models/user.model";

export class UserController {

    private static instance : UserController;
    private userRepository  : Repository<User>;

    private constructor () {
        this.userRepository = getRepository(User);
    }


    public static getInstance(){

        if(UserController.instance === undefined)
        {
            UserController.instance = new UserController();
        }

        return UserController.instance;
    }

    public async getAll() : Promise<User[]>{

        return await this.userRepository.find();

    }

    public async create(props:UserProps) : Promise<User> {

        const encryptedPassword = await hash(props.password,10);

        const user = this.userRepository.create({
            ...props,
            password : encryptedPassword,
        });

        return await this.userRepository.save(user);

    }

}