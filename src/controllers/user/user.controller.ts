import { Controller } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { CrudFactory } from '../crud/crud.factory';
import CreateUserDTO from './DTO/CreateuserDTO';
import { UserEntity } from 'src/database/entities/user.entity';

@Controller('user')
export class UserController extends CrudFactory<CreateUserDTO, CreateUserDTO, UserEntity>(CreateUserDTO, CreateUserDTO) {

    constructor(public service: UserService) {
        super(service)
    }

}
