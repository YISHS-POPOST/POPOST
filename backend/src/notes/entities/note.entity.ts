import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: "notes"})
export class Note {
    @PrimaryColumn()
    id: number;

    @Column()
    user_id: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    content: string;

    @Column('datetime')
    created_at: string;
}
