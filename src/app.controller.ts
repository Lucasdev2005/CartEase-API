import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('crud')
export class AppController {
  constructor(public prisma: PrismaService) {}

  @Get('get')
  public getItem() {
    return 'olá';
  }

}
