import { Module } from '@nestjs/common';
import { AccountantController } from './accountant.controller';
import { Accountant } from './accountant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountantService } from './accountant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountant])],
  controllers: [AccountantController],
  providers: [AccountantService],
})
export class AccountantModule {}
