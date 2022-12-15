import { Entity, Column, PrimaryColumn } from 'typeorm/index';

@Entity({ name: "users" })
export class User {
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

  @Column('text')
  introduce: string;

  @Column()
  nickname: string;

  @Column()
  profile: string;
}

