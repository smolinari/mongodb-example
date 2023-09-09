import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ComponentClass {
  @Prop({ required: true, type: String })
  someString: string;
}

@Schema()
export class ContainerClass extends Document {
  @Prop({ required: true, type: ComponentClass })
  content: ComponentClass;
}

export const ContainerClassSchema =
  SchemaFactory.createForClass(ContainerClass);
