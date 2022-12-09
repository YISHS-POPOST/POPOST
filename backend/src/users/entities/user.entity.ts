import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm/index';

@Entity({ name: "users" })
export class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  phone: string;
}
