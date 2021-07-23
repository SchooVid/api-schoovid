import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course__course } from "./course.model";
import { Course__proposed_course } from "./proposed_course.model";

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


    @OneToMany(type => Course__proposed_course, proposed_course => proposed_course.categorieId)
    proposed_course : Course__proposed_course[]


}