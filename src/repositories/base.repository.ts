import { PrismaService } from "src/prisma.service";

export class baseRepository {
    public prisma = new PrismaService();
    constructor(public model: string) {}

    public findItem() {
        return this.prisma[this.model].findFirst();
    }

    public createItem(data) {
        return this.prisma[this.model].create(data);
    }

    public updateItem({data, where}) {
        return this.prisma[this.model].update({
            where: where,
            data: data
        });
    }

    public deleteItem(where) {
        return this.prisma[this.model].delete({
            where: where
        });
    }

    public findAllItemsBy({distinct={}, where={}, select={}, orderBy={}}) {
        return this.prisma[this.model].findMany({
            where: where,
            distinct: distinct,
            select: select,
            orderBy: orderBy
        });
    }
}