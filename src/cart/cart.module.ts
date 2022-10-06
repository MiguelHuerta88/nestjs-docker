import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CartController } from './controller/cart.controller';
import { CartService } from './service/cart.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CART_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'cart',
          protoPath: join(__dirname, 'cart.proto'),
          url: '0.0.0.0:3000',
        },
      },
    ]),
  ],
  controllers: [CartController],
  exports: [ClientsModule],
  providers: [CartService],
})
export class CartModule {}
