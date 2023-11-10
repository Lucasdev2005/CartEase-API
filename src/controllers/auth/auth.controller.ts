import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UnauthorizedException } from '@nestjs/common';
import UserRepository from 'src/repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

interface LoginPayload {
    USR_Username: string,
    USR_Password: string
}

interface userPayload {
    USR_Username: string,
    USR_Password: string,
    USR_Address: string,
    USR_Name: string,
    USR_Seller: boolean
}

@Controller('auth')
export class AuthController {

    constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

    @HttpCode(HttpStatus.OK)
    @Post()
    private async _login(@Body() userPayload: LoginPayload) {
        let user: User = await this.userRepository.findItem({
            USR_Username: userPayload.USR_Username
        });

        if (user && bcrypt.compare(userPayload.USR_Password, user.USR_Password)) {
            let payload = { sub: user.USR_UserId, username: user.USR_Username };
            delete user.USR_Password;
            return {
                ...user,
                token: await this.jwtService.signAsync(payload)
            }
        }
        else {
            throw new UnauthorizedException('Login invalid!');
        }
    }

    @Post('createAccount')
    private async _createAccount(@Body() user: userPayload) {
        let findUserByName = await this.userRepository.findItem({
            USR_Username: user.USR_Username
        });
        if (!findUserByName) {
            return await this.userRepository.createItem(user);
        }
        else {
            throw new HttpException('Username já usado!', HttpStatus.BAD_REQUEST);
        }
    }

}
