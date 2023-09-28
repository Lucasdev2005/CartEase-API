export class baseRepository {
    constructor(public prisma) {}

    public findItem() {
        return this.prisma.findMany();
    }

    public createItem(data) {
        return this.prisma.create(data);
    }

    public updateItem({data, where}) {
        return this.prisma.update({
            where: where,
            data: data
        });
    }

    public deleteItem(where) {
        return this.prisma.delete({
            where: where
        });
    }

    public findAllItemsBy({distinct={}, where={}, select={}, orderBy={}}) {
        return this.prisma.findMany({
            where: where,
            distinct: distinct,
            select: select,
            orderBy: orderBy
        });
    }
}