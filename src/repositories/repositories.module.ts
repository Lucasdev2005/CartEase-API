import { Module } from '@nestjs/common';
import { baseRepository } from './base.repository';
import UserRepository  from './user.repository';
import ProductRepository from './product.repository';

@Module({
    imports: [
        baseRepository,
        UserRepository,
        ProductRepository
    ],
    providers: [baseRepository],
    exports: [
        UserRepository,
        ProductRepository
    ]
})
export class RepositoriesModule {}
