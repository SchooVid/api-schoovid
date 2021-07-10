import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, RelationId } from "typeorm";
import {Course__level} from "./course_level.model"; 
import {Course__category} from "./course_category.model"; 
import { User } from "./user.model";


export interface CourseProps {
    libelle : string;
    description : string;
    formateurId : string;
    niveauId : string;
    categorieId : string;
    date_diffusion : string;
    date_fin_diffusion : string;
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


    @ManyToOne(type => User, formateur => formateur.course)
    @JoinColumn({name : 'formateurId'})
    formateur : User;

    @Column ({
        nullable : false,
        unique : false
    })
    formateurId : string;

    @Column({
        nullable : true,
        unique : false
    })
    description : string;

    @ManyToOne(type => Course__level, niveau => niveau.course)
    @JoinColumn({name : 'niveauId'})
    niveau: Course__level;

    @Column({
        nullable : false,
        unique : false
    })
    niveauId : string;

    @ManyToOne(type => Course__category, categorie => categorie.course) 
    @JoinColumn({name : 'categorieId'})
    categorie: Course__category;

    @Column({
        nullable : false,
        unique : false
    })
    categorieId : string;


    @Column({
        nullable : true,
        unique : false,
        type : "datetime"
    })
    date_diffusion : string;

    @Column({
        nullable : true,
        unique : false,
        type  : "datetime"
    })
    date_fin_diffusion : string;

    @Column({
        nullable : true,
        unique : false
    })
    lien_diffusion : string;

}