import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(200)
  @ApiProperty()
  content: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: true })
  status: boolean = true;
}
