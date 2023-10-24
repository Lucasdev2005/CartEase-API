import { baseRepository } from "./base.repository";
import { Product } from "@prisma/client";

export default class ProductRepository extends baseRepository<Product> {
    constructor() {super("product")}
}