import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CrudBaseService } from '../CrudBase.service';
import { User } from '../../database/entities/User';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends CrudBaseService<User> {
    
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
        super(userRepository)
    }

    public async createResource(data: DeepPartial<User>): Promise<User> {
        data.USR_UserPassword = await bcrypt.hash(data.USR_UserPassword, 10);
        return await super.createResource(data);
    }
}