import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ContainerClass, ContainerClassSchema } from './data';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    MongooseModule.forFeature([
      { name: ContainerClass.name, schema: ContainerClassSchema },
    ]),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
