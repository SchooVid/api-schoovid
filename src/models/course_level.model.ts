import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Course__course } from "./course.model";


export interface CourseLevel {

    libelle:string;

}

@Entity()
export class Course__level implements CourseLevel {
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