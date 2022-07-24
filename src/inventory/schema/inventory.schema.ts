import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type InventoryDocument = InventoryModel & Document;

@Schema({
  timestamps: true,
  collection: 'inventory',
})
export class InventoryModel {
  @Prop({
    type: String,
    default: function genUUID() {
      return uuidv4();
    },
  })
  id: string;

  @Prop({ type: String })
  productName: string;

  @Prop({ type: String })
  productDescription: string;

  @Prop({ type: String })
  productImage: string;

  @Prop({ type: Number })
  productPrice: number;

  @Prop({ type: Number })
  productRating: number;

  @Prop({ type: Number })
  productQuantity: number;
}

export const InventorySchema = SchemaFactory.createForClass(InventoryModel);
