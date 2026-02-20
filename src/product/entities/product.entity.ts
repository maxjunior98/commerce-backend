import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({type: "varchar", length: 64})
    product_name: string;

    @Column({type: "varchar", length: 128})
    product_description: string;

    @Column({type: "double precision"})
    product_price: number;

    @Column({type: "integer"})
    store_owner_id: number;
}
