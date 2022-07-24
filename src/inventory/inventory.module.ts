import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  InventoryModel,
  InventorySchema,
} from 'src/inventory/schema/inventory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: InventoryModel.name,
        schema: InventorySchema,
      },
    ]),
  ],
  providers: [InventoryService],
  controllers: [InventoryController],
})
export class InventoryModule {}
