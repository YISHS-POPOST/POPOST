import { Entity, Column, PrimaryColumn } from "typeorm/index";

@Entity({ name: "message_rooms" })
export class MessageRoom {
  @PrimaryColumn()
  id: number;

  @Column()
  create_user: string;

  @Column()
  invite_user: string;
}
