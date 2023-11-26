import { Controller } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { CrudController } from '../crud/crud.controller';
import { UserEntity } from 'src/entities/user-entity/user-entity';

@Controller('user')
export class UserController extends CrudController<UserEntity> {

    constructor(public service: UserService) {
        super(service)
    }

}
