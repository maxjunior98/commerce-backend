import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Store {

    @PrimaryGeneratedColumn()
    store_id: number;

    @Column({type: "varchar", length: 64})
    store_name: string;

    @Column({type: "varchar", length: 64})
    store_login: string;

    @Column({type: "varchar", length: 32})
    store_password: string;
}
