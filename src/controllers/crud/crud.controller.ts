import { Body, Delete, Get, Headers, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { CrudBaseService } from "src/services/CrudBase.service";
import { BaseEntity, DeepPartial } from "typeorm";

export abstract class CrudController<T extends BaseEntity> {

    constructor(public readonly service: CrudBaseService<T>) {}

    @Get('getResource')
    public async getResource(@Query('where') where: string) {
        return await this.service.getResource(await this._parseQueryParams(where));
    }

    @Post('createResource')
    public async createResource(@Body() body: DeepPartial<T>) {
        return await this.service.createResource(body);
    }

    @Put('updateResource')
    public async updateResource(@Query('where') where: string, @Body() body: any) {
        return await this.service.updateResource(
            await this._parseQueryParams(where),
            body
        );
    }

    @Delete("deleteResource")
    public async deleteResource(@Query('where') where: string) {
        return await this.deleteResource(await this._parseQueryParams(where));
    }

    @Get("paginateResource")
    public async paginateResource(
        @Query('where') where: string,
        @Query('page', new ParseIntPipe()) page: number,
        @Query('pageSize', new ParseIntPipe()) pageSize: number,
    ) {
        return await this.service.paginateResource(
            await this._parseQueryParams(where),
            page,
            pageSize
        );
    }

    @Get("listResource")
    public async listResource(@Query('where') where: string) {
        return await this.service.listResource(await this._parseQueryParams(where));
    }

    private async _parseQueryParams(stringObject: string = null) {
        if (stringObject) {
            return await JSON.parse(JSON.parse(stringObject));
        }
        else {
            return {}
        }
    }
}