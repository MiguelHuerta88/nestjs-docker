import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroesController } from './controller/heroes.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, 'hero.proto'),
          url: '0.0.0.0:3000',
        },
      },
    ]),
  ],
  controllers: [HeroesController],
  exports: [ClientsModule],
})
export class HeroModule {}
