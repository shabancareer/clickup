/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.enableCors({
     origin: 'http://localhost:3000', // Your Next.js frontend URL
     methods: 'GET',
     credentials: true,
   });
  await app.listen(process.env.PORT ?? 3001);
}
// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-floating-promises
bootstrap();
