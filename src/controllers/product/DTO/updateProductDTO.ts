import {IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateProductDTO {

    @IsOptional()
    @IsNumber()
    PRD_ProductStock: number;

    @IsString()
    @MaxLength(30)
    @IsOptional()
    PRD_ProductName: string;

    @IsNumber()
    @IsOptional()
    PRD_SellerId: number;
}