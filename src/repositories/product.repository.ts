import { baseRepository } from "./base.repository";
import { Product, User } from "@prisma/client";
import UserRepository from "./user.repository";
import { HttpException, HttpStatus } from "@nestjs/common";

export default class ProductRepository extends baseRepository<Product> {
    constructor() {super("product")}

    public async createItem(data: any): Promise<Product> {
        const userRepository = new UserRepository();
        let userFound: User = await userRepository.findItem({USR_UserId: data.PRD_Seller});

        if (userFound.USR_Seller) {
            return super.createItem(data);    
        }
        else {
            throw new HttpException('user is a not a Seller', HttpStatus.BAD_REQUEST);
        }
    }
}