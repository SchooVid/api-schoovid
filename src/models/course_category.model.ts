import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course__course } from "./course.model";

export interface CourseCategoryProps {

    libelle:string;

}

@Entity()
export class Course__category implements CourseCategoryProps {
    @PrimaryGeneratedColumn("uuid")
    id : string;
    
    @Column({
        nullable : false,
        unique : true
    })
    libelle : string;

    @OneToMany(type => Course__course, course => course.categorie) 
    course : Course__course[];


}