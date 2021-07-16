import {Router} from "express";
import {MessageController} from "../controllers/message.controller";

const message_router = Router();

//Get messages from one course
message_router.post("/:courseId",async (req,res) => {
    const messageController : MessageController = MessageController.getInstance();

    const id = res.param.id ?? "";

    try{
        const messageData = await messageController.getMessageFromOneCourse(id);  
        
        res.status(200).json(messageData);
    }
    catch(e)
    {
        res.status(400).json(e);
    }
});

message_router.post("/send",async (req,res) => {
    const messageController : MessageController = MessageController.getInstance();


    try{
        const messageData = await messageController.sendMessage({...req.body});  
        
        res.status(200).json(messageData);
    }
    catch(e)
    {
        res.status(400).json(e);
    }
});

export {message_router}