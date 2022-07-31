import { IsNumber, IsString } from 'class-validator';

export class updateCartQuantityReqDto {
  @IsString()
  cartId: string;

  @IsNumber()
  basePrice: number;

  @IsNumber()
  quantity: number;
}
