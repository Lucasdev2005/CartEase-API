import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Product {

    @PrimaryGeneratedColumn('increment')
    PRD_ProductId: number;

    @Column({default: 1, nullable: false})
    PRD_ProductStock: number;

    @Column({length: 30, nullable: false})
    PRD_ProductName: string;

    @Column({name: "PRD_SellerId"})
    @ManyToOne(() => User, user => user.Products)
    seller: User;
}
