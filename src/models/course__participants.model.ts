import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course__course } from "./course.model";
import { User } from "./user.model";

export interface CourseParticipantProps 
{
    courseId : string;
    participantId : string;
}

@Entity()
export class Course__participant implements CourseParticipantProps
{
    @Column ({
        nullable : false,
        unique : false,
        primary : true
    })
    courseId : string;


    @Column ({
        nullable : false,
        unique : false,
        primary : true
    })
    participantId : string;
}