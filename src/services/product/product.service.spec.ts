import { UserService } from 'src/services/user/user.service';
import { dataSourceOptions } from './../../database/data-source';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services.module';

describe('ProductService', () => {
  let service: ProductService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        ServicesModule
      ]
    }).compile();

    service = module.get<ProductService>(ProductService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("create, update, get and delete a Product", () => {

    let userId: number;

    it("shoud create a Product", async () => {
      let user = await userService.createResource({
        USR_UserAdress: "aerocity",
        USR_UserPassword: "gerin",
        USR_UserSeller: true,
        USR_Username: "user de teste"
      });

      userId = user.USR_UserId;

      let productData = {
        PRD_ProductStock: 1,
        PRD_ProductName: "Produto de teste",
        PRD_ProductSeller: userId
      };
      let result = await service.createResource(productData);
    });
  });
});
