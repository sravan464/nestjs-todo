import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('controller')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':number/hello')
  getHello(@Param() params): any {
    return { name: `hello number ${params.number}` };
  }

  @Get()
  async findAll(): Promise<any[]> {
    return [{ name: 'sravan' }, { name: 'test' }];
  }
}
