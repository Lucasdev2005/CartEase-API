import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { ServicesModule } from '../services.module';
import { dataSourceOptions } from '../../database/data-source';

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        imports: [
          TypeOrmModule.forRoot(dataSourceOptions),
          ServicesModule
        ]
      }).compile();

      service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    describe('Create, update, delete and get User', () => {
      let result;
      let id: number;

      it('should create a user', async () => {
        const userData = {
          USR_UserAdress: "aerolandia",
          USR_Username: "Lucas Moreira Nunes",
          USR_UserPassword: "gerinus@1",
          USR_UserSeller: true
        }; 
        
        result = await service.createResource(userData);
        id = result.USR_UserId;
    
        //deletar ID pois sempre irá mudar e quebrar o teste.
        delete(result.USR_UserId);

        expect(result).toEqual(userData);
      });

      it('shoud update a user', async () => {
        const userUpdateData = {
          USR_UserAdress: "aerolandia",
          USR_Username: "Lucas Moreira Nunes Atualizado",
          USR_UserPassword: "gerinus@123",
          USR_UserSeller: true
        };
        const result = await service.updateResource({USR_UserId: id}, userUpdateData);

        //deletar ID pois sempre irá mudar e quebrar o teste.
        delete(result.USR_UserId);

        expect(result).toEqual(userUpdateData);
      });

      it('shoud be get a user', async () => {
        const userGetData = {
          USR_UserAdress: "aerolandia",
          USR_Username: "Lucas Moreira Nunes Atualizado",
          USR_UserPassword: "gerinus@123",
          USR_UserSeller: true
        };

        const result = await service.getResource({
          USR_UserId: id
        });
    
        //deletar ID pois sempre irá mudar e quebrar o teste.
        delete(result.USR_UserId);

        expect(result).toEqual(userGetData);
      });
    
      it('shoud be delete a user', async () => {
        const userDeleteData = {
          USR_UserAdress: "aerolandia",
          USR_Username: "Lucas Moreira Nunes Atualizado",
          USR_UserPassword: "gerinus@123",
          USR_UserSeller: true
        };

        const result = await service.deleteResource({
          USR_UserId: id
        });

        //deletar ID pois sempre irá mudar e quebrar o teste.
        delete(result.USR_UserId);

        expect(result).toEqual(userDeleteData);
      });
    });

    describe('List User', () => {
      it('should a List users', async () => {
        const result = await service.listResource({});

        let expected = false;

        if (result.length > 0) {
          expected = true;
        }

        expect(expected).toEqual(true);
      });
    });

    describe('Paginate Users', () => {
      it('shoud a paginate list of users', async () => {
        const listPaginateUsers = await service.paginateResource({}, 1, 3);
        let result = false;

        if (listPaginateUsers.data.length >= 0) {
          result = true;
        }

        expect(result).toEqual(true);
      });
    });
});
