import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContainerDocument, Component, Container } from './data';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Container.name)
    private readonly containerModel: Model<Container>,
  ) {}

  async createSample(someString: string): Promise<ContainerDocument> {
    const component = new Component();
    component.someString = someString;

    const newContainer = new this.containerModel({
      content: component,
    });

    return await newContainer.save();
  }
}
