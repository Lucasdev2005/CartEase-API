import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudBaseService } from '../CrudBase.service';
import { User } from 'src/database/entities/User';

@Injectable()
export class UserService extends CrudBaseService<User> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
        super(userRepository)
    }
}