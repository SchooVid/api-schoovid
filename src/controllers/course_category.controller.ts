import { Course__category, CourseCategoryProps } from "../models/course_category.model";
import { getConnection, getRepository, Repository } from "typeorm";

export class CourseCategoryController 
{
    private static instance : CourseCategoryController;
    private courseCategoryRepository  : Repository<Course__category>;

    private constructor () {
        this.courseCategoryRepository = getRepository(Course__category);
    }

    public static getInstance(){

        if(CourseCategoryController.instance === undefined)
        {
            CourseCategoryController.instance = new CourseCategoryController();
        }

        return CourseCategoryController.instance;
    }

    public async getCategory() : Promise<Course__category[]>
    {
        return await this.courseCategoryRepository.find();
    }

    public async getOneCategoryById(id : string) : Promise<Course__category>
    {
        return await this.courseCategoryRepository.findOne(id)
    }

    public async createCourseCategory(props : CourseCategoryProps) : Promise<any>
    {
        const courseCategory = await this.courseCategoryRepository.create({
            ...props
        });

       
        return await this.courseCategoryRepository.save(courseCategory)
    }

    public async updateCourseCategory(id : string, props : CourseCategoryProps) : Promise<Course__category>
    {
        await this.courseCategoryRepository.update(id,props);

        return await this.courseCategoryRepository.findOne(id);
    }

    public async deleteCourseCategory(id : string) : Promise<void>
    {
        await this.courseCategoryRepository.delete(id);
    }


}
