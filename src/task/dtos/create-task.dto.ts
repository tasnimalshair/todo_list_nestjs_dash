/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateTaskDto {
//   @IsNumber()
//   id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  priority: number;

  @IsBoolean()
  importance: boolean;
}
