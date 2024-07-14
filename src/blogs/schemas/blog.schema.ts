import { AbstractSchema } from '@app/database/abstracts';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema({ collection: 'blogs' })
export class Blog extends AbstractSchema {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
