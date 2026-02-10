import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    customer_id: number;

    @Column({type: 'varchar', length: 64})
    customer_name: string;

    @Column({type: 'varchar', length: 128})
    customer_email: string;

    @Column({type: 'varchar', length: 32})
    customer_password: string;
}


// customer/entities/customer.entity.ts