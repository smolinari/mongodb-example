import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { Container, ContainerSchema } from './data';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    MongooseModule.forFeature([{ name: Container.name, schema: ContainerSchema }]),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
