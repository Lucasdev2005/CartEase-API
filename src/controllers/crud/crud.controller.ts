import { Body, Controller, Delete, Get, Head, Headers, InternalServerErrorException, Post, Put, UseGuards } from '@nestjs/common';
import { baseRepository } from 'src/repositories/base.repository';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('crud')
export class CrudController {

    @Get('getResource')
    public async getResource(@Headers() headers, @Body() body) {
        return await this._getRepository(headers.repository).findItem(body.where);
    }

    @Post('createResource')
    public async createResource(@Headers() headers, @Body() body) {
        return await this._getRepository(headers.repository).createItem(body);
    }

    @Put('updateResource')
    public async updateResource(@Headers() headers, @Body() body) {
        return await this._getRepository(headers.repository).updateItem({
            data: body.data,
            where: body.where
        });
    }

    @Delete("deleteResource")
    public async deleteResource(@Headers() headers, @Body() body) {
        return await this._getRepository(headers.repository).deleteItem(body.where);
    }

    @Get("ListResource")
    public async listResource(@Headers() headers, @Body() body) {
        return this._getRepository(headers.repository).findAllItemsBy({
            distinct: body.distinct || {},
            select: body.select || {},
            orderBy: body.orderBy || {},
            where: body.where || {}
        });
    }

    private _getRepository(repository: string): baseRepository<any> {
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
 