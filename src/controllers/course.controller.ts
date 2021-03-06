import { Course__course, CourseProps } from "../models/course.model";
import { getConnection, getRepository, Repository } from "typeorm";

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

        const query = `SELECT 
            course__course.*,
            user.firstname,
            user.lastname,
            course__category.libelle as category,
            course__level.libelle as level
        FROM 
            course__course 
        LEFT JOIN 
            user ON user.id = course__course.formateurId 
        LEFT JOIN 
            course__category ON course__category.id = course__course.categorieId
        LEFT JOIN 
            course__level ON course__level.id = course__course.niveauId`;

        return await this.courseRepository.manager.query(query)

    }

    public async getOneCoursebyId(id : string): Promise<any> 
    {
        let status = 200;
        let errorMessage = "";

        try{
            const data =  await this.courseRepository.findOneOrFail(id);

            return {
                "status" : status,
                "errorMessage" : errorMessage,
                "data" : data
            }
        }
        catch(e)
        {
            status = 400

            return {
                "status" : status,
                "errorMessage" : e,
                "data" : {}
            };
        }
    }

    public async getAllCoursesFromAUser(id : String): Promise<any> 
    {

        let status = 200;
        let errorMessage = "";

        try{
            return await this.courseRepository.createQueryBuilder().where("formateurId =  :id",{id}).getMany();

            /*return {
                "status" : status,
                "errorMessage" : errorMessage,
                "data" : data
            }*/
        }
        catch(e)
        {
            status = 400;

            return {
                "status" : status,
                "errorMessage" : e,
                "data" : {}
            }
        }
    }


    public async create(props:CourseProps) : Promise<any> {
 
        //Control
        const date_diffusion        = props.date_diffusion;
        const date_fin_diffusion    = props.date_fin_diffusion;
        const formateurId           = props.formateurId;
        let errorMessage            = "";
        let status                  = 201;
        let data;

        try {
            /*const isCourseBetweenDates = await this.courseRepository
            .createQueryBuilder("id")
            .where("date_diffusion <= :date_diffusion",{date_diffusion})
            .andWhere("date_fin_diffusion >= :date_fin_diffusion",{date_fin_diffusion})
            .andWhere("formateurId = :formateurId",{formateurId})
            .getMany();

        
            if(isCourseBetweenDates.length > 0)
            {
                //Must do a middleware that sends an error
                errorMessage = "Ce cours d??borde sur les plages horaires d'un autre cours"
                status = 400; 
                data = {};      
            }*/
            console.log(props)
            
            const course = await this.courseRepository.create({
                ...props
            });

            data =  await this.courseRepository.save(course);

            
            return {
                "success" : true,
                "status" : status,
                "errorMessage" : errorMessage,
                "data" : data
            };
        }
        catch(e)
        {
            return {
                "status" : 500,
                "errorMessage" : e.message,
                "data" : {}
            };
        }

    }

    public async update(id: string, props:CourseProps) : Promise<Course__course> {
        await this.courseRepository.update(id,props);
        return this.getOneCoursebyId(id);
    }

    public async delete(id:string): Promise<void> {
        await this.courseRepository.delete(id);
    }

}