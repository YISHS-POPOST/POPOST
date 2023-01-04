import { Community } from 'src/communities/entities/community.entity';
import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm/index';

@Entity({ name: "community_applies" })
export class CommunityApply {
    @PrimaryColumn()
    id:number;

    @Column()
    user_id: string;

    @Column()
    community_id: number;

    @Column('text')
    content: string;

    @ManyToOne(() => Community, (community) => community.communityApply)
    @JoinColumn({ name: 'community_id' })
    community: Community
}
