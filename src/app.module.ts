import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RepositoriesModule } from './repositories/repositories.module';
import { ControllersModule } from './controllers/controllers.module';

@Module({
  imports: [RepositoriesModule, ControllersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
