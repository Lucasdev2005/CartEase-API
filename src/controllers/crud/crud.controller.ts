import { Body, Delete, Get, Headers, ParseIntPipe, Post, Put, Query } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseEntity, DeepPartial, Repository } from "typeorm";

export abstract class CrudController<T extends BaseEntity> {

    constructor(public readonly repository: Repository<T>) {}
    

    // @Get('getResource')
    // public async getResource(@Headers() headers, @Query('where') where: string) {
    //     return this.repository.find({
    //         where: this._parseQueryParams(where)
    //     })
    // }

    @Post('createResource')
    public createResource(@Body() body: DeepPartial<T>) {
        return this.repository.save(this.repository.create(body));
    }

    // @Put('updateResource')
    // public async updateResource(@Headers() headers, @Body() body: updateDTO) {
    // }

    // @Delete("deleteResource")
    // public async deleteResource(@Headers() headers, @Query('where') where: string) {

    // }

    // @Get("listResource")
    // public async listResource(
    //     @Headers() headers, 
    //     @Query('where') where: string,
    //     @Query('page', new ParseIntPipe({optional: true})) page?: number,
    //     @Query('pageSize', new ParseIntPipe({optional: true})) pageSize?: number,
    // ) {
    // }

    private async _parseQueryParams(stringObject: string = null) {
        if (stringObject) {
            return await JSON.parse(stringObject);
        }
        else {
            return {}
        }
    }
}