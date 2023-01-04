import { Message } from "src/messages/entities/message.entity";
import { User } from "src/users/entities/user.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
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
  @JoinColumn({ name: "invite_user" })
  inviteUser: User;

  @OneToOne(() => User)
  @JoinColumn({ name: "create_user" })
  createUser: User;

  @OneToOne(() => Message, { nullable: true })
  @JoinColumn({ name: "id", referencedColumnName: "room_id" })
  message: Message;
}
