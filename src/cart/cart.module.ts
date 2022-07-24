import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModel, CartSchema } from 'src/cart/schema/cart.schema';
import {
  InventoryModel,
  InventorySchema,
} from 'src/inventory/schema/inventory.schema';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CartModel.name,
        schema: CartSchema,
      },
      {
        name: InventoryModel.name,
        schema: InventorySchema,
      },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
