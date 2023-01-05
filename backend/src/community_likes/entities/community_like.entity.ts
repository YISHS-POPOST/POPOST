import { Community } from "src/communities/entities/community.entity";
import { Column, Entity, PrimaryColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";

@Entity({name: "community_likes"})
export class CommunityLike {
    @PrimaryColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    community_id: number;

    @ManyToOne(() => Community, (community) => community.communityLike)
    @JoinColumn({ name : 'community_id'})
    community: Community;
}
