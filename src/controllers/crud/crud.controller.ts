import { Controller, Get, Headers } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('crud')
export class CrudController {
    constructor(private prisma: PrismaService) {}

    @Get('get')
    public getResource(@Headers() headers) {
        return this.prisma.user.findMany();
    }

    public getRepository(repository) {
        let repositoryClass = require(`../../repositories/${repository}.repository.ts`);
        if (repositoryClass) {
            let repositoryInstanced = new repositoryClass.default();
            return repositoryInstanced;
        }
        else {
            return "reposiory '" + repository + "' not found! :(";
        }
    }
}
