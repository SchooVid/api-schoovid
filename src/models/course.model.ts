import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, RelationId } from "typeorm";
import {Course__level} from "./course_level.model"; 
import {Course__category} from "./course_category.model"; 
import { User } from "./user.model";


export interface CourseProps {
    libelle : string;
    description : string;
    formateur : User;
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


    @RelationId( (course : Course__course) => course.formateur)

    formateurId : string;
    @ManyToOne(type => User, formateur => formateur.course)
    formateur : User;

    @Column({
        nullable : true,
        unique : false
    })
    description : string;

    @RelationId( (course : Course__course) => course.niveau)

    niveauId : string;
    @ManyToOne(type => Course__level, niveau => niveau.course)
    niveau: Course__level;

    @RelationId((course : Course__course) => course.categorie )

    categorieId : string;
    @ManyToOne(type => Course__category, categorie => categorie.course) 
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