import { baseRepository } from "./base.repository";
import { User } from "@prisma/client";
import * as bcrypt from 'bcrypt';

export default class UserRepository extends baseRepository<User> {

    constructor() {super("user")}

    public async createItem(data: any): Promise<User> {
        data.USR_Password = await bcrypt.hash(data.USR_Password, 10);
        return super.createItem(data);
    }
}