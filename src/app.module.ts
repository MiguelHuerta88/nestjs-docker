import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [HeroModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
