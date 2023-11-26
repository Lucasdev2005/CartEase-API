import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from './entities/entities.module';
import { UserEntity } from './entities/user-entity/user-entity';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ControllersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'db',
      username: 'cartease',
      password: 'cartease@123',
      entities: [UserEntity],
      synchronize: true
    }),
    EntitiesModule,
    ServicesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
