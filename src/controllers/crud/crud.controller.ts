import { Body, Delete, Get, HttpCode, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { CrudBaseService } from "src/services/CrudBase.service";
import { BaseEntity, FindOptionsWhere } from "typeorm";
import { AbstractValidationPipe } from "./validation.pipe";

export abstract class CrudController<T extends BaseEntity> {

    constructor(
        public readonly service: CrudBaseService<T>,
    ) {}

    @Get('getResource')
    @HttpCode(201)
    public async getResource(@Query('where') where: string) {
        return await this.service.getResource(await this._parseQueryParams(where));
    }

    @Post('createResource')
    public async createResource(@Body() body) {
        return await this.service.createResource(body);
    }

    @Put('updateResource')
    public async updateResource(@Query('where') where: string, @Body() body) {
        return await this.service.updateResource(
            await this._parseQueryParams(where),
            body
        );
    }

    @Delete("deleteResource")
    public async deleteResource(@Query('where') where: string) {
        return await this.service.deleteResource(await this._parseQueryParams(where));
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

    private async _parseQueryParams(stringObject: string = null): Promise<FindOptionsWhere<T>> | null {
        if (stringObject) {
            return await JSON.parse(JSON.parse(stringObject));
        }
        return null
    }
}