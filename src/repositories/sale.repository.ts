import { baseRepository } from "./base.repository";
import { Product, Sale } from "@prisma/client";
import ProductRepository from "./product.repository";
import { HttpException, HttpStatus } from "@nestjs/common";
import ProductSaleRepository from "./productSale.repository";

export default class SaleRepository extends baseRepository<Sale> {
    constructor() {super("sale")}

    public async createItem(data: any): Promise<Sale> {
        const productRepository = new ProductRepository();
        const productSaleRepository = new ProductSaleRepository();
        let SaleValue: number = 0; 

        //verify, products have stock
        for (const product of data.products) {
            let productFound: Product = await  productRepository.findItem({
                PRD_ProductId: product.PRD_ProductId
            });
            SaleValue += productFound.PRD_Price * product.PRS_Quantity;
            if ((productFound.PRD_stock - product.PRS_Quantity) < 0) {
                throw new HttpException('Product dont have Stock', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        //save a sale
        let saleSaved: Sale = await super.createItem({
            ...data.sale,
            SLE_Value: SaleValue,
        });

        //save sale Products
        for (const product of data.products) {
            let productFound: Product = await  productRepository.findItem({
                PRD_ProductId: product.PRD_ProductId
            });
            productSaleRepository.createItem({
                PRS_SaleId: saleSaved.SLE_SaleId,
                PRS_ProductId: product.PRD_ProductId,
                PRS_Quantity: product.PRS_Quantity
            });
            productRepository.updateItem({
                data: {
                    PRD_stock: productFound.PRD_stock - product.PRS_Quantity
                },
                where: {
                    PRD_ProductId: product.PRD_ProductId
                }
            })
        }

        return saleSaved;
    }
}
