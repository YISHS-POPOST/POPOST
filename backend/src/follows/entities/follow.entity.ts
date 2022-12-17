import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "follows" })
export class Follow {
    @PrimaryColumn()
    id: number;

    @Column()
    follow_id: string;

    @Column()
    follower_id: string;
}