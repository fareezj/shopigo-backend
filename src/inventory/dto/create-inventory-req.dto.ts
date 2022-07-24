import { IsNumber, IsString } from 'class-validator';

export class CreateInventoryReqDto {
  @IsString()
  id: string;

  @IsString()
  productName: string;

  @IsString()
  productDescription: string;

  @IsString()
  productImage: string;

  @IsNumber()
  productPrice: number;

  @IsNumber()
  productRating: number;

  @IsNumber()
  productQuantity: number;
}
