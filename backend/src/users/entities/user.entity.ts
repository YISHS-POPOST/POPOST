import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryColumn()
    id : string;

    @Column()
    password : string;

    @Column()
    email : string;
    
    @Column()
    name : string;

    @Column()
    phone : string;
}
