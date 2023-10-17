import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AccountantService } from './accountant.service';

@Controller('accountant')
export class AccountantController {
  constructor(private readonly AccountantService: AccountantService) {}

  @Get('/transactions')
  @HttpCode(HttpStatus.OK)
  async getAllOperations() {
    return await this.AccountantService.getAllOperations();
  }

  @Get('/transactions/expence')
  @HttpCode(HttpStatus.OK)
  async getAllExpenseOperations() {
    return await this.AccountantService.getAllExpenceOperations();
  }

  @Get('/transactions/income')
  @HttpCode(HttpStatus.OK)
  async getAllIncomeOperations() {
    return await this.AccountantService.getAllIncomeOperations();
  }

  @Post('/transactions/create')
  @HttpCode(HttpStatus.OK)
  async createOperations(@Req() req: Request) {
    const { body } = req;
    await this.AccountantService.createOperation(body);
  }

  @Delete('/transactions/delete')
  @HttpCode(HttpStatus.OK)
  async deleteOperations(@Req() req: Request) {
    const { body } = req;
    await this.AccountantService.deleteOperation(body);
  }

  @Put('/transactions/edit')
  @HttpCode(HttpStatus.OK)
  async editOperations(@Req() req: Request) {
    const { body } = req;
    await this.AccountantService.editOperation();
  }
}
