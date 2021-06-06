import { Course__course, CourseProps } from "../models/course.model";
import { getRepository, Repository } from "typeorm";

export class CourseController {


    private static instance : CourseController;
    private courseRepository  : Repository<Course__course>;

    private constructor () {
        this.courseRepository = getRepository(Course__course);
    }
    

    public static getInstance(){

        if(CourseController.instance === undefined)
        {
            CourseController.instance = new CourseController();
        }

        return CourseController.instance;
    }

    public async getAll() : Promise<Course__course[]>{

        return await this.courseRepository.find();

    }

    public async getOneCoursebyId(id : string): Promise<Course__course> {
        return await this.courseRepository.findOneOrFail(id);
    }

    public async create(props:CourseProps) : Promise<Course__course> {
 
        //Control

        const course = this.courseRepository.create({
            ...props
        });

        return await this.courseRepository.save(course);

    }

    public async update(id: string, props:CourseProps) : Promise<Course__course> {
        await this.courseRepository.update(id,props);
        return this.getOneCoursebyId(id);
    }

    public async delete(id:string): Promise<void> {
        await this.courseRepository.softDelete(id);
    }

}