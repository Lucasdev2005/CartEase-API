import { Body, Delete, Get, HttpCode, ParseIntPipe, Post, Put, Query, Type } from "@nestjs/common";
import { BaseEntity, FindOptionsWhere } from "typeorm";
import { AbstractValidationPipe } from "./validation.pipe";
import { CrudBaseService } from "src/services/CrudBase.service";
import { ApiOperation, ApiQuery } from "@nestjs/swagger";
import { CrudSwagger } from './crud.swagger';

export function CrudFactory<CreateDTO, UpdateDTO, entity extends BaseEntity>(
    createDto: Type<CreateDTO>,
    updateDto: Type<UpdateDTO>,
    crudSwagger: CrudSwagger
  ) {
    const createPipe = new AbstractValidationPipe({ whitelist: true, transform: true }, { body: createDto });
    const updatePipe = new AbstractValidationPipe({ whitelist: true, transform: true }, { body: updateDto });

    class CrudController {

        constructor(
            public readonly service: CrudBaseService<entity>,
        ) {}

        @Get('getResource')
        @ApiOperation(crudSwagger.getOperation.operation)
        @ApiQuery(crudSwagger.getOperation.where)
        public async getResource(@Query('where') where: string) {
            return await this.service.getResource(await this.parseQueryParams(where));
        }

        @Post('createResource')
        @HttpCode(201)
        @ApiOperation(crudSwagger.createOperation)
        public async createResource(@Body(createPipe) body) {
            return await this.service.createResource(body);
        }

        @Put('updateResource')
        @ApiOperation(crudSwagger.updateOperation.operation)
        @ApiQuery(crudSwagger.updateOperation.where)
        public async updateResource(@Query('where') where: string, @Body(updatePipe) body) {
            return await this.service.updateResource(
                await this.parseQueryParams(where),
                body
            );
        }

        @Delete("deleteResource")
        @ApiOperation(crudSwagger.deleteOperation.operation)
        @ApiQuery(crudSwagger.deleteOperation.where)
        public async deleteResource(@Query('where') where: string) {
            return await this.service.deleteResource(await this.parseQueryParams(where));
        }

        @Get("paginateResource")
        @ApiOperation(crudSwagger.paginateOperation.operation)
        @ApiQuery(crudSwagger.paginateOperation.where)
        public async paginateResource(
            @Query('where') where: string,
            @Query('page', new ParseIntPipe()) page: number,
            @Query('pageSize', new ParseIntPipe()) pageSize: number,
        ) {
            return await this.service.paginateResource(
                await this.parseQueryParams(where),
                page,
                pageSize
            );
        }

        @Get("listResource")
        @ApiOperation(crudSwagger.listOperation.operation)
        @ApiQuery(crudSwagger.updateOperation.where)
        public async listResource(@Query('where') where: string) {
            return await this.service.listResource(await this.parseQueryParams(where));
        }

        public async parseQueryParams(stringObject: string = null): Promise<FindOptionsWhere<entity>> | null {
            if (stringObject) {
                return JSON.parse(decodeURIComponent(stringObject));
            }
            return null
        }
    }

    return CrudController;
}