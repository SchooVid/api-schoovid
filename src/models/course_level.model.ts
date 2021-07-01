import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Course__course } from "./course.model";


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


}