import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { CrudController } from './crud/crud.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth/auth.controller';

@Module({
    imports: [RepositoriesModule],
    controllers: [CrudController, AuthController],
    providers: [PrismaService]
})
export class ControllersModule {}
