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

export class CreateStoreDto {
    
    @IsString()
    @IsNotEmpty()
    store_name: string;

    @IsString()
    @IsNotEmpty()
    store_login: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4, {message: 'Password must have 4 characters'})
    store_password: string;
}
