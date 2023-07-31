import { Module } from '@nestjs/common';

import { ConfigModule } from './config.module';
import { TypeOrmModule } from '@db/typeorm.module';
import { UserModule } from '@entities/user/user.module';
import { AccountantModule } from '@entities/accountant/accountant.module';

@Module({
  imports: [ConfigModule, TypeOrmModule, UserModule, AccountantModule],
})
export class AppModule {}
