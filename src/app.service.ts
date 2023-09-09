import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComponentClass, ContainerClass } from './data';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(ContainerClass.name)
    private readonly containerModel: Model<ContainerClass>,
  ) {}

  async createSample(someString: string): Promise<ContainerClass> {
    const component = new ComponentClass();
    component.someString = someString;

    const newContainer = new this.containerModel({
      content: component,
    });

    return await newContainer.save();
  }
}
