import { shoppingCart } from "@prisma/client";
import { baseRepository } from "./base.repository";
import { HttpException, HttpStatus } from "@nestjs/common";

interface CreateShoppingCart {
    SHP_UserID: number
    SHP_ProductId: number
}
export default class ShoppingCartRepository extends baseRepository<shoppingCart> {
    constructor() {super('shoppingCart')}

    public async createItem(data: CreateShoppingCart): Promise<shoppingCart> {
        let findItemOnCart = await this.findAllItemsBy({
            where: {
                SHP_UserID: data.SHP_UserID,
                SHP_ProductId: data.SHP_ProductId
            }
        });
        if (findItemOnCart.length > 0) {
            throw new HttpException('Item Exists on Cart!', HttpStatus.BAD_REQUEST);
        }
        else {
            return await super.createItem(data);
        }
    }

    public async findAllItemsBy({ where, page, pageSize, include }: { where?: {}; page?: any; pageSize?: any; include?: any; }): Promise<any> {
        return await super.findAllItemsBy({where, page, pageSize, include: {
            product: true,
            user: true
        }});
    }

    public async updateItem({ data, where }: { data: any; where: any; }) {

        if (data.SHP_Quantity <= 0) {
            return await super.deleteItem(where);
        }
        else {
            return await super.updateItem({
                data,
                where
            });
        }
    }
}