import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export interface MessageProps {
    courseId : string;
    userId : string;
    message : string;
}

@Entity()
export class Message {
    @Column({
        nullable : false,
        unique : false,
        primary : true
    })
    courseId : string;

    @Column({
        nullable : false,
        unique : false,
        primary : true
    })
    userId : string;

    @Column({
        nullable : false,
        unique : false,
    })
    message : string;
}