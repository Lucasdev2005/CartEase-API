import { Module } from '@nestjs/common';
import { baseRepository } from './base.repository';
import UserRepository  from './user.repository';

@Module({
    imports: [
        baseRepository,
        UserRepository
    ],
    providers: [baseRepository],
    exports: [
        UserRepository
    ]
})
export class RepositoriesModule {}
