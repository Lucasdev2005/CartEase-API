import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/User';
import { ProductService } from './product/product.service';
import { Product } from 'src/database/entities/Product';

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
