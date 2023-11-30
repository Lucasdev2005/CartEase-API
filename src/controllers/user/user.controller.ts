import { Controller } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { CrudFactory } from '../crud/crud.factory';
import CreateUserDTO from './DTO/CreateuserDTO';
import { User } from 'src/database/entities/User';
import { UpdateUserDTO } from './DTO/updateUserDTO';
import { userSwagger } from './user.swagger';

@Controller('user')
export class UserController extends CrudFactory<CreateUserDTO, UpdateUserDTO, User>(CreateUserDTO, UpdateUserDTO, userSwagger) {

    constructor(public service: UserService) {
        super(service)
    }

}
