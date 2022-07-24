import { IsNumber, IsString } from 'class-validator';

export class AddCartReqDto {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsString()
  userId: string;
}
