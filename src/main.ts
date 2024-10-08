import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

import { join } from 'path';
import * as hbs from 'hbs';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  
  
  await app.listen(3000);

}

bootstrap();
