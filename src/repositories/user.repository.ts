import { baseRepository } from "./base.repository";
import { User } from "@prisma/client";

export default class UserRepository extends baseRepository<User> {

    constructor() {super("user")}

}