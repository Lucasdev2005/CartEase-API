import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { ServicesModule } from 'src/services/services.module';

@Module({
  controllers: [UserController],
  imports: [ServicesModule]
})
export class ControllersModule {}
