import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('webhooks')
  postPaypalWebhook(@Body() payload: any) {
    console.log('Paypal WEBHOOKS', payload);
    return payload;
  }
}
