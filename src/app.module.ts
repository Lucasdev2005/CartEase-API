import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllersModule } from './controllers/controllers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from './services/services.module';
import { dataSourceOptions } from './database/data-source';
import { User } from './database/entities/User';
import { Product } from './database/entities/Product';

@Module({
  imports: [
    ControllersModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    ServicesModule,
    TypeOrmModule.forFeature([User, Product])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
