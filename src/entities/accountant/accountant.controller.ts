import {
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('accountant')
export class AccountantController {
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllOperations() {
    return { test: 'he' };
  }

  @Post('/create')
  @HttpCode(HttpStatus.OK)
  async createOperations(@Req() req: Request) {
    console.log('create', req);
  }
}
