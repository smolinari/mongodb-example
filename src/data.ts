import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type ContainerDocument = HydratedDocument<Container>

@Schema()
export class Component {
  @Prop({ required: true, type: String })
  someString: string;
}


export class Container {
  @Prop({ required: true, type: Component })
  content: Component;
}

export const ContainerSchema =
  SchemaFactory.createForClass(Container);
