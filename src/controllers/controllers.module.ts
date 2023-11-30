import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { ServicesModule } from 'src/services/services.module';
import { ProductController } from './product/product.controller';

@Module({
  controllers: [UserController, ProductController],
  imports: [ServicesModule]
})
export class ControllersModule {}
