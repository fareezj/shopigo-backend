import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CartDocument = CartModel & Document;

@Schema({
  timestamps: true,
  collection: 'cart',
})
export class CartModel {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  id: string;

  @Prop({ type: String })
  productId: string;

  @Prop({ type: String })
  userId: string;

  @Prop({ type: Number })
  quantity: number;

  @Prop({ type: Number })
  basePrice: number;

  @Prop({ type: Number })
  totalPrice: number;
}

export const CartSchema = SchemaFactory.createForClass(CartModel);
