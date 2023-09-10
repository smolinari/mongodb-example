import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { Container, ContainerSchema } from './data';
import { MongoServer } from './mongo-server';

const mongo = new MongoServer()

describe('AppService', () => {
  let appService: AppService;
  let moduleRef: TestingModule

  beforeEach(async () => {
    await mongo.init()

    moduleRef = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(mongo.getConnectionUri()),
        MongooseModule.forFeature([{ name: Container.name, schema: ContainerSchema }]),
      ],
      controllers: [],
      providers: [AppService],
    }).compile();

    appService = moduleRef.get<AppService>(AppService);
  });

  describe('createService', () => {
    it('should save to MongoDB', async () => {
      const result = await appService.createSample('test');
      console.log(result);
    });
  });
  afterAll(async () => mongo.closeDbConnection())
  afterEach(async () => mongo.dropDatabase())
});
