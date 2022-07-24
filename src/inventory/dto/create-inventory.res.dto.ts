import { IsNumber, IsString } from 'class-validator';

export class CreateInventoryResDto {
  @IsNumber()
  statusCode: number;

  @IsString()
  message: string;

  @IsString()
  id: string;
}
