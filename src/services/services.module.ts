import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entities/user.entity';

@Module({
  providers: [UserService],
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  exports: [UserService]
})
export class ServicesModule {}
