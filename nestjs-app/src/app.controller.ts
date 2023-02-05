import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('api/users')
  getUsers() {
    return [
      { id: 1, name: "Asmaa" },
      { id: 2, name: "Ali" },
      { id: 3, name: "Ghadeer" },
    ];
  }
}