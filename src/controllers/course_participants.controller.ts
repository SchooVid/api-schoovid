import { CourseParticipantProps, Course__participant } from "../models/course__participants.model";
import { getRepository, Repository } from "typeorm";

export class CourseParticipantController {

    private static instance : CourseParticipantController;
    private courseParticipantRepository  : Repository<Course__participant>;

    private constructor () {
        this.courseParticipantRepository = getRepository(Course__participant);
    }

    public static getInstance(){

        if(CourseParticipantController.instance === undefined)
        {
            CourseParticipantController.instance = new CourseParticipantController();
        }

        return CourseParticipantController.instance;
    }

    public async getCourseParticipant() : Promise<Course__participant[]>{
        
        return this.courseParticipantRepository.find();
    }

    public async addCourseParticipant(props : CourseParticipantProps) : Promise<Course__participant> 
    {
        const courseParticipant = await this.courseParticipantRepository.create(
            {...props});

        return this.courseParticipantRepository.save(courseParticipant);
    }

    public async removeCourseParticipant(id : string) : Promise<void> 
    {
        this.courseParticipantRepository.softDelete(id);
    }
}