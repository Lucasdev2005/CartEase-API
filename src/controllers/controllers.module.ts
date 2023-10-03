import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { CrudController } from './crud/crud.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
    imports: [RepositoriesModule],
    controllers: [CrudController],
    providers: [PrismaService]
})
export class ControllersModule {}
