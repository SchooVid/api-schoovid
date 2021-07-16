import {Message,MessageProps} from '../models/message.model'
import { getConnection, getRepository, Repository } from "typeorm";

export class MessageController {

    private static instance : MessageController;
    private messageRepository  : Repository<Message>;

    private constructor () {
        this.messageRepository = getRepository(Message);
    }

    public static getInstance(){

        if(MessageController.instance === undefined)
        {
            MessageController.instance = new MessageController();
        }

        return MessageController.instance;
    }

    public async getMessageFromOneCourse(id : string) : Promise<Message[]> 
    {
        return this.messageRepository.createQueryBuilder().where("courseId = :id",{id}).getMany();
    }

    public async sendMessage(props : MessageProps): Promise<Message>
    {
        const sentMessage = this.messageRepository.create({
            ...props
        });

        return this.messageRepository.save(sentMessage);
    }
}