import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port, () => {
    console.log(`listen ${port}`);
  });
}
bootstrap();
