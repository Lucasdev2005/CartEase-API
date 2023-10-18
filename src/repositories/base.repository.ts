import { PrismaService } from "src/prisma.service";

export class baseRepository<Type> {
    public prisma = new PrismaService();
    constructor(public model: string) {}

    public findItem(where): Type {
        return this.prisma[this.model].findUnique({where:where});
    }

    public async createItem(data): Promise<Type> {
        return await this.prisma[this.model].create({
            data: data
        });
    }

    public updateItem({data, where}): Type {
        return this.prisma[this.model].update({
            where: where,
            data: data
        });
    }
 
    public deleteItem(where): Type {
        return this.prisma[this.model].delete({
            where: where
        });
    }

    public findAllItemsBy({distinct={}, where={}, select={}, orderBy={}}): Type[] {
        return this.prisma[this.model].findMany({
            where: where,
            distinct: distinct,
            select: select,
            orderBy: orderBy
        });
    }
}