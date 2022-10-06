import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { HeroById } from '../interfaces/hero-by-id.interface';
import { Hero } from '../interfaces/hero.interface';

@Controller()
export class HeroesController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(
    data: HeroById,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Hero {
    console.log(`Request came in with data`);
    console.log(data);
    const items = [
      { id: 1, name: 'Miguel' },
      { id: 2, name: 'Susie' },
    ];

    return items.find(({ id }) => id === data.id);
  }
}
