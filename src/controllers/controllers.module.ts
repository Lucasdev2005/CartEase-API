import { Module } from '@nestjs/common';
import { CrudController } from './crud/crud.controller';
import { UserController } from './user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user-entity/user-entity';

@Module({
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
})
export class ControllersModule {}
