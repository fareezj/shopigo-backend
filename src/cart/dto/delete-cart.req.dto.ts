import { IsString } from 'class-validator';

export class DeleteCartReqDto {
  @IsString()
  cartId: string;
}
