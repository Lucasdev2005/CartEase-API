import { IsBoolean, IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export default class CreateUserDTO {

    @IsNotEmpty()
    @IsString()
    USR_Username: string;

    @IsBoolean()
    USR_UserSeller: boolean;

    @IsNotEmpty()
    @MaxLength(9)
    @IsString()
    USR_UserPassword: string

    @IsNotEmpty()
    @IsString()
    USR_UserAdress: string
}