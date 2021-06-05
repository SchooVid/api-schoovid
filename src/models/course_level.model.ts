import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}