import {

  IsNotEmpty,

  IsNumber,

  IsString,

} from 'class-validator';

export class CreateVehicleDto {

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  plate: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  year: number;

}