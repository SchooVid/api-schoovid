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

    public async getOneUserById(id : string): Promise<User> {
        return await this.userRepository.findOneOrFail(id);
    }

    public async getAll() : Promise<User[]>{

        return await this.userRepository.find();

    }

    public async getAllProfessor() : Promise<User[]>{

        return await this.userRepository.find({where: {role:"PROFESSEUR"}});

    }

    public async create(props:UserProps) : Promise<User> {

        const encryptedPassword = await hash(props.password,10);

        const user = this.userRepository.create({
            ...props,
            password : encryptedPassword,
        });

        return await this.userRepository.save(user);

    }

    public async update(id: string, props:UserProps) : Promise<User> {
        await this.userRepository.update(id,props);
        return this.getOneUserById(id);
    }

    public async delete(id: string) : Promise<boolean> {
        const result = await this.userRepository.delete(id);
        return result.affected == 0 ? false : true;
    }


}