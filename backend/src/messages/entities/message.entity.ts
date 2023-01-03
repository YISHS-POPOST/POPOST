import { Entity, PrimaryColumn, Column } from "typeorm/index";

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
