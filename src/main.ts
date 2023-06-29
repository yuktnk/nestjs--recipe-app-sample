import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // アプリケーション全体で使用されるバリデーションパイプを設定
  // ValidationPipeは、リクエストのデータのバリデーションを自動的に処理し、
  // 無効なデータが送信された場合にエラーレスポンスを返す
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
