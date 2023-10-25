import { baseRepository } from "./base.repository";
import { Product, Sale } from "@prisma/client";
import ProductRepository from "./product.repository";

export default class SaleRepository extends baseRepository<Sale> {
    constructor() {super("sale")}

    public async createItem(data: any): Promise<Sale> {
        const productRepository = new ProductRepository();
        for (const product of data.products) {
            let productFound: Product = await  productRepository.findItem({
                PRD_ProductId: product.PRS_ProductId
            });
            if (productFound.PRD_stock < (productFound.PRD_stock - product.PRS_Quantity)) {
                
            }
        }
        data.SLE_DateSale = await new Date(data.SLE_DateSale);
        let saleSaved = super.createItem(data);

    }
}