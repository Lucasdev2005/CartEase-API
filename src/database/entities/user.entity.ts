import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    USR_UserId: number

    @Column()
    USR_Username: string

    @Column()
    USR_UserAdress: string

    @Column()
    USR_UserPassword: string
}
