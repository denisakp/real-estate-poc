import { AbstractSchema } from '@app/database/abstracts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EstateDocument = HydratedDocument<Estate>;

@Schema({ collection: 'estates' })
export class Estate extends AbstractSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  address: string;
}

export const EstateSchema = SchemaFactory.createForClass(Estate);
