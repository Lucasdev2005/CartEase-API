import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user-entity/user-entity';

@Module({
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  exports: [UserService]
})
export class ServicesModule {}
