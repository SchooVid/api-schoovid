import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Course__course } from "./course.model";
import { Course__proposed_course} from "./proposed_course.model";


export interface CourseLevelProps {

    libelle:string;

}

@Entity()
export class Course__level implements CourseLevelProps {
    @PrimaryGeneratedColumn("uuid")
    id : string;
    
    @Column({
        nullable : false,
        unique : true
    })
    libelle : string;

    @OneToMany(type => Course__course, course => course.niveau) 
    course : Course__course[];

    @OneToMany(type => Course__proposed_course, proposed_course => proposed_course.niveauId)
    proposed_course : Course__proposed_course[]


}