import { Body, Controller, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user-entity/user-entity';
import { CrudController } from '../crud/crud.controller';

@Controller('user')
export class UserController extends CrudController<UserEntity> {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
        super(userRepository)
    }
}
