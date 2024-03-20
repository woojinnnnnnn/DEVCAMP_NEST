import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 이걸 걸어줌 으로써 내가 허락한 Dto 객체만 전송 받는다.
    }),
  );

  await app.listen(3000);
}
bootstrap();
