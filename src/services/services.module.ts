import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product/product.service';
import { Product } from '../database/entities/Product';
import { User } from '../database/entities/User';

@Module({
  providers: [UserService, ProductService],
  imports: [
    TypeOrmModule.forFeature([
      User,
      Product
    ])
  ],
  exports: [UserService, ProductService]
})
export class ServicesModule {}
