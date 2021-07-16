import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course__course } from "./course.model";
import { Course__proposed_course } from "./proposed_course.model"

export enum UserRole{
    ADMIN="ADMIN",ETUDIANT="ETUDIANT",PROFESSEUR="PROFESSEUR"    
}

export interface UserProps {
    username : string;
    password : string;
    lastname : string;
    firstname : string;
}

@Entity()
export class User implements UserProps {
    @PrimaryGeneratedColumn("uuid")
    id : string;
    
    @Column({
        nullable : false,
        unique : true
    })
    username : string;

    @Column({
        nullable : false,
    })
    password : string;

    @Column({
        nullable : false,
        type : "enum",
        enum : UserRole,
        default : UserRole.ETUDIANT
    })
    role : string;

    @Column({
        nullable : false,
        unique : false
    })
    lastname : string;

    @Column({
        nullable : false,
        unique : false
    })
    firstname : string;

    @OneToMany(type => Course__course, course => course.formateur) 
    course : Course__course[];

    @OneToMany(type => Course__proposed_course, proposed_course => proposed_course.userId)
    proposed_course : Course__proposed_course[];
}