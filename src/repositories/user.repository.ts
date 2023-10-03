import { PrismaService } from "src/prisma.service";
import { baseRepository } from "./base.repository";

export class UserRepository extends baseRepository {

    constructor(public prisma: PrismaService) {
        super(null);
    }

}