import { Controller, Get, Headers } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { baseRepository } from 'src/repositories/base.repository';

@Controller('crud')
export class CrudController {
    constructor(public prisma: PrismaService) {}

    @Get('get')
    public async getResource(@Headers() headers) {
        return await this.getRepository(headers.repository).findItem();
    }

    public getRepository(repository): baseRepository {
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
 