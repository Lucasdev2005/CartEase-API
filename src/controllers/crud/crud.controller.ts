import { Body, Controller, Delete, Get, Head, Headers, Post, Put, Query, UseGuards } from '@nestjs/common';
import { baseRepository } from 'src/repositories/base.repository';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('crud')
export class CrudController {

    @Get('getResource')
    public async getResource(@Headers() headers, @Query('where') where: string) {
        return await this._getRepository(headers.repository).findItem(this._parseQueryParams(where));
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
        return await this._getRepository(headers.repository).deleteItem(this._parseQueryParams(where));
    }

    @Get("ListResource")
    public async listResource(@Headers() headers, @Query('where') where: string) {
        return this._getRepository(headers.repository).findAllItemsBy({where: this._parseQueryParams(where)});
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

    private _parseQueryParams(stringObject: string = null) {
        if (stringObject) {
            return JSON.parse(JSON.parse(stringObject));
        }
        else {
            return {}
        }
    }
}
 