import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity({ name: "follows" })
export class Follow {
  @PrimaryColumn()
  id: number;

  @Column()
  follow_id: string;

  @Column()
  follower_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "follow_id" })
  user: User;
}
