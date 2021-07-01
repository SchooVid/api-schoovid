import { Course__level, CourseLevelProps } from "../models/course_level.model";
import { getConnection, getRepository, Repository } from "typeorm";

export class CourseLevelController
{
    private static instance : CourseLevelController;
    private courseLevelRepository  : Repository<Course__level>;

    private constructor () {
        this.courseLevelRepository = getRepository(Course__level);
    }
    

    public static getInstance(){

        if(CourseLevelController.instance === undefined)
        {
            CourseLevelController.instance = new CourseLevelController();
        }

        return CourseLevelController.instance;
    }

    public async getLevel() : Promise<Course__level[]>{
        
        return this.courseLevelRepository.find();
    }

    public async getOneLevelById(id : string) : Promise<Course__level> {

        return this.courseLevelRepository.createQueryBuilder().where(':id',{id}).getOne();

    }
} 