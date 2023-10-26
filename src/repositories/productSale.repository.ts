import { ProductSale } from "@prisma/client";
import { baseRepository } from "./base.repository";

export default class ProductSaleRepository extends baseRepository<ProductSale> {
    constructor() {super("ProductSale")}
}
