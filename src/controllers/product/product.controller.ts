import { Controller } from '@nestjs/common';
import { CrudFactory } from '../crud/crud.factory';
import { ProductService } from 'src/services/product/product.service';
import { CreateProductDTO } from './DTO/createProductDTO';
import { UpdateProductDTO } from './DTO/updateProductDTO';
import { Product } from 'src/database/entities/Product';
import { productSwagger } from './product.swagger';

@Controller('product')
export class ProductController extends CrudFactory<CreateProductDTO, UpdateProductDTO, Product>(CreateProductDTO, UpdateProductDTO, productSwagger) {
    constructor(
        public service: ProductService
    ) {
        super(service)
    }
}
