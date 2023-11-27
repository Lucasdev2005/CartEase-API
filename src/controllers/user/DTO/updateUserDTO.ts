import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";

export class UpdateUserDTO {

    @IsNotEmpty()
    @IsString()
    USR_Username: string;

    @IsBoolean()
    USR_UserSeller: boolean;

    @IsNotEmpty()
    @Length(9)
    @IsString()
    USR_UserPassword: string

    @IsNotEmpty()
    @IsString()
    USR_UserAdress: string
}