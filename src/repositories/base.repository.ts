import { PrismaService } from "src/prisma.service";

export class baseRepository<Type> {
    public prisma = new PrismaService();
    constructor(public model: string) {}

    public async findItem(where): Promise<Type> {
        return await this.prisma[this.model].findUnique({where:where});
    }

    public async createItem(data): Promise<Type> {
        return await this.prisma[this.model].create({
            data: data
        });
    }

    public async updateItem({data, where}): Promise<Type> {
        return await this.prisma[this.model].update({
            where: where,
            data: data
        });
    }

    public deleteItem(where): Type {
        return this.prisma[this.model].delete({
            where: where
        });
    }

    public async findAllItemsBy({where={}, page = null, pageSize = null}): Promise<Type[]> {
        if (page && pageSize) {
            const skip = (page - 1) * pageSize;
            const totalCount = await this.prisma[this.model].count();
            const totalPages = Math.ceil(totalCount / pageSize);
            
            let data = await this.prisma[this.model].findMany({
                where,
                skip,
                take: pageSize,
            });

            return {
                meta: {
                    totalCount,
                    totalPages,
                    currentPage: page
                },
                ...data
            }
        }
        else {
            return await this.prisma[this.model].findMany({where});
        }
    }
}