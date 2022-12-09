import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name : 'users'})
export class Users {
    @Column()
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
