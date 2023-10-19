import { Body, Controller, Delete, Get, Head, Headers, InternalServerErrorException, Post, Put } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { baseRepository } from 'src/repositories/base.repository';

@Controller('crud')
export class CrudController {
    constructor(public prisma: PrismaService) {}

    @Get('getResource')
    public async getResource(@Headers() headers, @Body() body) {
        return await this.getRepository(headers.repository).findItem(body.where);
    }

    @Post('createResource')
    public async createResource(@Headers() headers, @Body() body) {
        return await this.getRepository(headers.repository).createItem(body);
    }

    @Put('updateResource')
    public async updateResource(@Headers() headers, @Body() body) {
        return await this.getRepository(headers.repository).updateItem({
            data: body.data,
            where: body.where
        });
    }

    @Delete("deleteResource")
    public async deleteResource(@Headers() headers, @Body() body) {
        return await this.getRepository(headers.repository).deleteItem(body.where);
    }

    @Get("ListResource")
    public async listResource(@Headers() headers, @Body() body) {
        return this.getRepository(headers.repository).findAllItemsBy({
            distinct: body.distinct || {},
            select: body.select || {},
            orderBy: body.orderBy || {},
            where: body.where || {}
        });
    }

    public getRepository(repository): baseRepository<any> {
        let repositoryClass = require(`../../repositories/${repository}.repository`);
        try {
            let repositoryInstanced = new repositoryClass.default();
            return repositoryInstanced;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
 