import { MessageRoom } from "src/message_rooms/entities/message_room.entity";
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm/index";

@Entity({ name: "messages" })
export class Message {
  @PrimaryColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  user_id: string;

  @Column()
  content: string;

  @Column()
  room_id: number;

  @Column()
  check: boolean;

  
}
