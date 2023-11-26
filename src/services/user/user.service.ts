import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user-entity/user-entity';
import { Repository } from 'typeorm';
import { CrudBaseService } from '../CrudBase.service';

@Injectable()
export class UserService extends CrudBaseService<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
        super(userRepository)
    }
}