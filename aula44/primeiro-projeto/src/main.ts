import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const logger = WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        //level: 'debug',
        level: configService.get<string>('LOG_LEVEL') || 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.colorize(),
          winston.format.printf(({ timestamp, level, message, context }) => {
            return `${timestamp} [${level}] ${context ? `[${context}] ` : ''}${message}`;
          }),
        ),
      }),
    ],
  });

  app.useLogger(logger);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('users')
    .addTag('products')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
