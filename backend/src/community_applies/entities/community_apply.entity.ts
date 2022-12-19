import { Entity, Column, PrimaryColumn } from 'typeorm/index';

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
}
