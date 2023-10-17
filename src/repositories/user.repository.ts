import { PrismaService } from "src/prisma.service";
import { baseRepository } from "./base.repository";

export default class UserRepository extends baseRepository {

    constructor(prisma: PrismaService) {
        super("user");
    }

} 