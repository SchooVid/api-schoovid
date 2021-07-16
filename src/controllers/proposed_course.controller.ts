import {Course__proposed_course, ProposedCourseProps} from '../models/proposed_course.model'
import { getConnection, getRepository, Repository } from "typeorm";

export class ProposedCourseController {

    private static instance : ProposedCourseController;
    private proposedCourseRepository  : Repository<Course__proposed_course>;

    private constructor () {
        this.proposedCourseRepository = getRepository(Course__proposed_course);
    }

    public static getInstance(){

        if(ProposedCourseController.instance === undefined)
        {
            ProposedCourseController.instance = new ProposedCourseController();
        }

        return ProposedCourseController.instance;
    }

    public async getAllProposedCourse() : Promise<Course__proposed_course[]>
    {
        return await this.proposedCourseRepository.find();
    }

    public async getOneProposedCourse(id : string) : Promise<Course__proposed_course>
    {
        return await this.proposedCourseRepository.findOne(id);
    }

    public async proposeCourse(props : ProposedCourseProps) : Promise<Course__proposed_course> 
    {
        const proposed_course = await this.proposedCourseRepository.create({
            ...props
        });

        return await this.proposedCourseRepository.save(proposed_course);
    }

    public async deleteProposedCourse(id : string) : Promise<void> 
    {
        await this.proposedCourseRepository.softDelete(id);
    }
}