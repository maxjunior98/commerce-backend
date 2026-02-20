import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    product_name: string;

    @IsString()
    @IsNotEmpty()
    product_price: number;

    @IsString()
    @IsNotEmpty()
    product_description: string;

    @IsInt()
    @IsNotEmpty()
    store_owner_id: number;
}
