import { IsEmail, IsISO8601, IsNotEmpty, IsString } from 'class-validator';
import { E_Gender } from '../types';

export class UpdateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  nameFirst: string;

  @IsString()
  nameLast: string;

  @IsISO8601()
  birthDate: Date;

  @IsNotEmpty()
  gender: E_Gender;
}
