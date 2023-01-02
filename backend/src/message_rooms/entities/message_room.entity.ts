import { User } from "src/users/entities/user.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  JoinTable,
} from "typeorm/index";

@Entity({ name: "message_rooms" })
export class MessageRoom {
  @PrimaryColumn()
  id: number;

  @Column()
  create_user: string;

  @Column()
  invite_user: string;

  @OneToOne(() => User)
  @JoinColumn({name : 'create_user'})
  user: User;
}
