import { Body, Controller, Delete, Get, Headers, ParseIntPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { baseRepository } from 'src/repositories/base.repository';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('crud')
export class CrudController {

    @Get('getResource')
    public async getResource(@Headers() headers, @Query('where') where: string) {
        return await this._getRepository(headers.repository).findItem(await this._parseQueryParams(where));
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
    public async deleteResource(@Headers() headers, @Query('where') where: string) {
        return await this._getRepository(headers.repository).deleteItem(await this._parseQueryParams(where));
    }

    @Get("listResource")
    public async listResource(
        @Headers() headers, 
        @Query('where') where: string,
        @Query('page', new ParseIntPipe({optional: true})) page?: number,
        @Query('pageSize', new ParseIntPipe({optional: true})) pageSize?: number,
    ) {
        return this._getRepository(headers.repository).findAllItemsBy({where: await this._parseQueryParams(where), page, pageSize});
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

    private async _parseQueryParams(stringObject: string = null) {
        if (stringObject) {
            return await JSON.parse(stringObject);
        }
        else {
            return {}
        }
    }
}