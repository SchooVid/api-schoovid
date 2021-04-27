import { Interface } from "node:readline";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole{
    ADMIN="ADMIN",ETUDIANT="ETUDIANT",PROFESSEUR="PROFESSEUR"    
}

export interface UserProps {
    username : string;
    password : string;
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
}