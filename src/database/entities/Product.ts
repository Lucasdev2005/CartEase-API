import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({name: "products"})
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    PRD_ProductId: number;

    @Column({default: 1, nullable: false})
    PRD_ProductStock: number;

    @Column({length: 30, nullable: false})
    PRD_ProductName: string;

    @Column({ name: "PRD_SellerId" })
    PRD_SellerId: number;

    @ManyToOne(() => User, user => user.Products)
    @JoinColumn({ name: "PRD_SellerId" }) 
    seller: User;
}
