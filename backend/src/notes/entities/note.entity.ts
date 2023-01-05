import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

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

    @OneToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User
}
