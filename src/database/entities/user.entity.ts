import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({default: false})
    USR_UserSeller: boolean = false;
}
