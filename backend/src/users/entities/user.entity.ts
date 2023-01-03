import { Community } from "src/communities/entities/community.entity";
import { Follow } from "src/follows/entities/follow.entity";
import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from "typeorm/index";

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

  @Column("text")
  introduce: string;

  @Column()
  nickname: string;

  @Column()
  profile: string;

  @OneToOne(() => Community, community => community)
  community: Community;
  
}
