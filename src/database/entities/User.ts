import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    USR_UserId: number;

    @Column()
    USR_Username: string;

    @Column()
    USR_UserAdress: string;

    @Column()
    USR_UserPassword: string;

    @Column({default: false})
    USR_UserSeller: boolean = false;

    @OneToMany(() => Product, Product => Product.seller)
    Products: Product[];
}
