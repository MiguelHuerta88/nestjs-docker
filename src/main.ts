import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  //await app.listen(3000);

  // code for microservice
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'cart',
        protoPath: join(__dirname, 'cart/cart.proto'),
        url: '0.0.0.0:3000',
      },
    },
  );

  await app.listen();
}
bootstrap();
