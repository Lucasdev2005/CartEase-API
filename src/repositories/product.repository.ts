import { baseRepository } from "./base.repository";
import { Products } from "@prisma/client";

export default class ProductRepository extends baseRepository<Products> {
    constructor() {super("products")}
}