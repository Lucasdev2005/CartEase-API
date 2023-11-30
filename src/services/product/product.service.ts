import { Injectable } from '@nestjs/common';
import { CrudBaseService } from '../CrudBase.service';
import { Product } from 'src/database/entities/Product';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends CrudBaseService<Product> {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) {
        super(productRepository)
    }
}
