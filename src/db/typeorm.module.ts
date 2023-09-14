import { Module } from '@nestjs/common';
import { TypeOrmModule as NestTypeOrmModule } from '@nestjs/typeorm';

console.log(process.env.POSTGRES_DATABASE);
@Module({
  imports: [
    NestTypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST, //localhost
      port: Number(process.env.POSTGRES_PORT), //5432
      username: process.env.POSTGRES_USERNAME, //test ??
      password: process.env.POSTGRES_PASSWORD, //test ??
      database: process.env.POSTGRES_DATABASE, //accountant ??
      entities: ['dist/entities/**/*.entity.js'],
      synchronize: true,
      // migrations: [ 'dist/db/migrations/**/*.js' ],
      // cli: { migrationsDir: 'src/db/migrations' },
    }),
  ],
})
export class TypeOrmModule {}
