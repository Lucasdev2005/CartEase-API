import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {

    @Post()
    public login() {

    }

    @Post('createAccount')
    public createAccount() {

    }

}