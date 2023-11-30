import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, MaxLength } from "class-validator";

export class CreateProductDTO {

    @IsOptional()
    @IsNumber()
    PRD_ProductStock: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    PRD_ProductName: string;

    @IsNumber()
    @IsNotEmpty()
    PRD_SellerId: number;
}