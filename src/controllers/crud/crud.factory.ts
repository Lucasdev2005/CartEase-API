import { Body, Delete, Get, HttpCode, ParseIntPipe, Post, Put, Query, Type, UsePipes } from "@nestjs/common";
import { BaseEntity, FindOptionsWhere } from "typeorm";
import { AbstractValidationPipe } from "./validation.pipe";
import { CrudBaseService } from "src/services/CrudBase.service";

export function CrudFactory<CreateDTO, UpdateDTO, entity extends BaseEntity>(
    createDto: Type<CreateDTO>,
    updateDto: Type<UpdateDTO>,
  ) {
    const createPipe = new AbstractValidationPipe({ whitelist: true, transform: true }, { body: createDto });
    const updatePipe = new AbstractValidationPipe({ whitelist: true, transform: true }, { body: updateDto });

    class CrudController {

        constructor(
            public readonly service: CrudBaseService<entity>,
        ) {}

        @Get('getResource')
        @HttpCode(201)
        public async getResource(@Query('where') where: string) {
            return await this.service.getResource(await this.parseQueryParams(where));
        }

        @Post('createResource')
        @UsePipes(createPipe)
        public async createResource(@Body() body) {
            return await this.service.createResource(body);
        }

        @UsePipes(updatePipe)
        @Put('updateResource')
        public async updateResource(@Query('where') where: string, @Body() body) {
            return await this.service.updateResource(
                await this.parseQueryParams(where),
                body
            );
        }

        @Delete("deleteResource")
        public async deleteResource(@Query('where') where: string) {
            return await this.service.deleteResource(await this.parseQueryParams(where));
        }

        @Get("paginateResource")
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
        public async listResource(@Query('where') where: string) {
            return await this.service.listResource(await this.parseQueryParams(where));
        }

        public async parseQueryParams(stringObject: string = null): Promise<FindOptionsWhere<entity>> | null {
            if (stringObject) {
                return await JSON.parse(JSON.parse(stringObject));
            }
            return null
        }
    }
  
    return CrudController;
  }