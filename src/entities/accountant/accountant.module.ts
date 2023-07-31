import { Module } from '@nestjs/common';
import { AccountantController } from './accountant.controller';

@Module({
  controllers: [AccountantController],
})
export class AccountantModule {}
