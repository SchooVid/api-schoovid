import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";
import {Course__level} from "./course_level.model"; 
import {Course__category} from "./course_category.model"; 

export interface ProposedCourseProps {
    id : string;
    libelle : string;
    description : string;
    userId : string;
    categorieId : string;
    niveauId : string;
}

@Entity()
export class Course__proposed_course implements ProposedCourseProps {

    @PrimaryGeneratedColumn("uuid")
    id : string;

    @Column({
        nullable : false,
        unique : false
    })
    libelle : string;

    @Column({
        nullable : false,
        unique : false
    })
    description : string;

    @ManyToOne(type => User, initiateur => initiateur.course)
    @JoinColumn({name : 'userId'})
    initiateur : User;
    
    @Column ({
        nullable : false,
        unique : false
    })
    userId : string;

    @ManyToOne(type => Course__level, level => level.course)
    @JoinColumn({name : 'niveauId'})
    level : Course__level;

    @Column({
        nullable : false,
        unique : false
    })
    niveauId : string;

    @ManyToOne(type => Course__category, category => category.course)
    @JoinColumn({name : 'categorieId'})
    category : Course__level;

    @Column({
        nullable : false, 
        unique : false
    })
    categorieId : string;

}