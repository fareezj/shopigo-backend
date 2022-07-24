import { IsNumber, IsString } from 'class-validator';
import { InventoryModel } from 'src/inventory/schema/inventory.schema';

export class GetInventoryResDto {
  @IsNumber()
  statusCode: number;

  @IsString()
  message: string;

  result: InventoryModel;
}
