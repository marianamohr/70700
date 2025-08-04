import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  stock: string;

  @Prop({ required: true })
  quantity: string;
}

export const productSchema = SchemaFactory.createForClass(Product);
