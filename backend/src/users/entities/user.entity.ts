import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm/index';

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn('rowid')
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
