import { dataSourceOptions } from './../../database/data-source';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services.module';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        ServicesModule
      ]
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
