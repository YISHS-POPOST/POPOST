
import { CommunityApply } from 'src/community_applies/entities/community_apply.entity';
import { CommunityLike } from 'src/community_likes/entities/community_like.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm/index';

@Entity({ name: "communities" })
export class Community {
    @PrimaryColumn()
    id:number;

    @Column()
    user_id: string;

    @Column()
    title: string;

    @Column('text')
    content: string;

    @Column('text')
    link: string;

    @Column('datetime')
    create_dt: string;

    @Column()
    view: number;

    @OneToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User

    @OneToMany(() => CommunityApply, (communityApply) => communityApply.community )
    communityApply: CommunityApply[];

    @OneToMany(() => CommunityLike, (communityLike) => communityLike.community)
    communityLike: CommunityLike;
}