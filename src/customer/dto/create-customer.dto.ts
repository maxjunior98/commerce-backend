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

export class CreateCustomerDto {

    @IsString()
    @IsNotEmpty()
    customer_name: string;

    @IsNotEmpty()
    @IsEmail()
    customer_email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4, {message: 'Password must have 4 characters'})
    customer_password: string;
}
