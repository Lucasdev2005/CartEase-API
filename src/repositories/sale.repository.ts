import { baseRepository } from "./base.repository";
import { Product, Sale, shoppingCart } from "@prisma/client";
import ProductRepository from "./product.repository";
import { HttpException, HttpStatus } from "@nestjs/common";
import ProductSaleRepository from "./productSale.repository";

interface SalePayload {
    sale: {
        SLE_buyer: number;
    };
    products: shoppingCart[];
}

export default class SaleRepository extends baseRepository<Sale> {
    constructor() { super("sale") }

    public async createItem(data: SalePayload): Promise<Sale> {
        const productRepository = new ProductRepository();
        const productSaleRepository = new ProductSaleRepository();
        let SaleValue: number = 0;

        //verify, products have stock
        for (const product of data.products) {
            let productFound: Product = await productRepository.findItem({
                PRD_ProductId: product.SHP_ProductId
            });
            SaleValue += productFound.PRD_Price * product.SHP_Quantity;
            if ((productFound.PRD_stock - product.SHP_Quantity) < 0) {
                throw new HttpException(productFound.PRD_Name + ' dont have Stock', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        //save a sale
        let saleSaved: Sale = await super.createItem({
            ...data.sale,
            SLE_DateSale: new Date(),
            SLE_Value: SaleValue,
        });

        //save sale Products
        for (const product of data.products) {
            let productFound: Product = await productRepository.findItem({
                PRD_ProductId: product.SHP_ProductId
            });
            productSaleRepository.createItem({
                PRS_SaleId: saleSaved.SLE_SaleId,
                PRS_ProductId: product.SHP_ProductId,
                PRS_Quantity: product.SHP_Quantity
            });
            productRepository.updateItem({
                data: {
                    PRD_stock: productFound.PRD_stock - product.SHP_Quantity
                },
                where: {
                    PRD_ProductId: product.SHP_ProductId
                }
            })
        }

        return saleSaved;
    }
}
