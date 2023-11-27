import { IsBoolean, IsString, Length, IsOptional } from "class-validator";

export class UpdateUserDTO {

    @IsString()
    @IsOptional()
    USR_Username?: string;

    @IsBoolean()
    @IsOptional()
    USR_UserSeller?: boolean;

    @Length(9)
    @IsString()
    @IsOptional()
    USR_UserPassword?: string

    @IsString()
    @IsOptional()
    USR_UserAdress?: string
}