import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";

export interface ProposedCourseProps {
    id : string;
    libelle : string;
    description : string;
    userId : string;
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
}