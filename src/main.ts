import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as config from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);

  // const { port } = config.get('server');

  const port = 3000;

  // await app.listen(process.env.PORT || port);
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
