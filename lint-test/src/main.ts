import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const x = 'hi';
  const x1 = 'hi';
  const x2 = 'hi';
  const x3 = 'hi';
  const x4 = 'hi';
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
