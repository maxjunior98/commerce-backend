import { NestFactory } from '@nestjs/core';
import { CustomerModule } from './modules/customer.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
