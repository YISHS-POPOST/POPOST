import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm/index';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('rowid')
    id : number;

    @Column()
    user_id : string;

    @Column()
    password : string;

    @Column()
    email : string;
    
    @Column()
    name : string;

    @Column()
    phone : string;
}
