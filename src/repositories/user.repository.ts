import { baseRepository } from "./base.repository";
import { User } from "@prisma/client";

export default class UserRepository extends baseRepository<User> {

    constructor(public user: User) {super("user")}

}