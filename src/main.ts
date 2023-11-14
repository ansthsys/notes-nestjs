import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Notes API')
    .setDescription('Simple RESTful API, Notes API using NestJS')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
