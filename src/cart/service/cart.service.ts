import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CartServiceInterface } from '../interfaces/cart-service.interface';

@Injectable()
export class CartService implements OnModuleInit {
  private cartService: CartServiceInterface;

  constructor(@Inject('CART_PACKAGE') private client: ClientGrpc) {
    console.log('here');
  }

  onModuleInit() {
    console.log(this.client.getService<CartServiceInterface>('CartsService'));
    this.cartService =
      this.client.getService<CartServiceInterface>('CartsService');
  }

  getCartById(): Observable<string> {
    return this.cartService.getCartById({ id: 1 });
  }

  getCartByVisit(): Observable<string> {
    return this.cartService.getCaryByVisit({
      brandCode: `1`,
      visitId: 2,
      customerId: 3,
      memberId: 4,
      fingerprint: `5`,
    });
  }
}
