import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  //TODO: можно настроить конфигурации для dev
  // if (isDev) {}
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4200);
}
bootstrap();
