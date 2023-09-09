import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from './app.service';
import { ContainerClass } from './data';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        AppService,
        {
          provide: getModelToken(ContainerClass.name),
          useValue: Model,
        },
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('createSample', () => {
    it('should save to MongoDB', async () => {
      const result = await appService.createSample('test');
      console.log(result);
    });
  });
});
