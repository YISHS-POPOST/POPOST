import { Entity, Column, PrimaryColumn } from 'typeorm/index';

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
}
