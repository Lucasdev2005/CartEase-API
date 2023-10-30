//service
import { PrismaService } from 'src/prisma.service';

//controllers
import { CrudController } from './crud/crud.controller';
import { AuthController } from './auth/auth.controller';

//modules
import { Module } from '@nestjs/common';
import { RepositoriesModule } from 'src/repositories/repositories.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
    imports: [
        RepositoriesModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
    ]
    ,
    controllers: [CrudController, AuthController],
    providers: [PrismaService]
})
export class ControllersModule {}
