import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (process.env.APP_ENV === 'prod') {
    app.enableCors({
      origin: process.env.CORS_ORIGIN,
      methods: '*',
    });
  } else {
    app.enableCors({
      origin: '*',
      methods: '*',
    });
  }

  await app.listen(3000);
}
bootstrap();
