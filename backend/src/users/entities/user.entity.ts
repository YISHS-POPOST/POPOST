import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm/index';

@Entity({name : 'users'})
export class Users {
    @PrimaryGeneratedColumn('rowid')
    id : number;
    
    @Column()
    password : string;

    @Column()
    email : string;
    
    @Column()
    name : string;

    @Column()
    phone : string;
}
