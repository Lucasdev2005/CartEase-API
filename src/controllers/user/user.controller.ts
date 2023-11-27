import { Controller } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { CrudController } from '../crud/crud.controller';
import { UserEntity } from 'src/database/entities/user.entity';

@Controller('user')
export class UserController extends CrudController<UserEntity> {

    constructor(public service: UserService) {
        super(service)
    }

}
