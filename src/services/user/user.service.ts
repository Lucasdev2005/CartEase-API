import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudBaseService } from '../CrudBase.service';
import { UserEntity } from 'src/Database/entities/user.entity';

@Injectable()
export class UserService extends CrudBaseService<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {
        super(userRepository)
    }
}