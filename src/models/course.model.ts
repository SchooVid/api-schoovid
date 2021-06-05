import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import {Course__level} from "./course_level.model"; 
import {Course__category} from "./course_category.model"; 


export interface CourseProps {
    libelle : string;
    description : string;
    niveau : Course__level;
    categorie : Course__category;
    date_diffusion : Date;
    date_fin_diffusion : Date;
    lien_diffusion : string;
}

@Entity()
export class Course__course implements CourseProps {
    @PrimaryGeneratedColumn("uuid")
    id : string;
    
    @Column({
        nullable : false,
        unique : true
    })
    libelle : string;

    @Column({
        nullable : true,
        unique : false
    })
    description : string;

    @OneToOne(type => Course__level) @JoinColumn() 
    niveau: Course__level;

    @OneToOne(type => Course__category) @JoinColumn() 
    categorie: Course__category;


    @Column({
        nullable : false,
        unique : false
    })
    date_diffusion : Date;

    @Column({
        nullable : false,
        unique : false
    })
    date_fin_diffusion : Date;

    @Column({
        nullable : true,
        unique : false
    })
    lien_diffusion : string;

}