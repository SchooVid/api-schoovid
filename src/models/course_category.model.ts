import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export interface CourseCategory {

    libelle:string;

}

@Entity()
export class Course__category implements CourseCategory {
    @PrimaryGeneratedColumn("uuid")
    id : string;
    
    @Column({
        nullable : false,
        unique : true
    })
    libelle : string;

}