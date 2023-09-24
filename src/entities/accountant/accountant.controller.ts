import {
  Controller,
  Get,
  Post,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AccountantService } from './accountant.service';

@Controller('accountant')
export class AccountantController {
  constructor(private readonly AccountantService: AccountantService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllOperations() {
    return { test: 'he' };
  }

  @Post('/createNewOperation')
  @HttpCode(HttpStatus.OK)
  async createOperations(@Req() req: Request) {
    const { body } = req;
    await this.AccountantService.createOperation(body);
  }

  @Get('/getAllExpenseOperations')
  @HttpCode(HttpStatus.OK)
  async getAllExpenseOperations() {
    return await this.AccountantService.getAllExpenceOperations();
  }
}
