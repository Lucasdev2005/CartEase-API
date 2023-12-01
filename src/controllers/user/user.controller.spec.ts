import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { ServicesModule } from '../../services/services.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../..//database/data-source';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [
        ServicesModule,
        TypeOrmModule.forRoot(dataSourceOptions),
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Create User', () => {
    it('should create a user', async () => {
      const userData = {
        USR_UserAdress: "aerolandia",
        USR_Username: "Lucas Moreira Nunes",
        USR_UserPassword: "gerinus@123",
        USR_UserSeller: true
      }; 
      
      const result = await controller.createResource(userData);
      delete(result.USR_UserId)

      expect(result).toEqual(userData);
    });
  });
});
