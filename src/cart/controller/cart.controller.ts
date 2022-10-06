import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { CartId } from '../interfaces/cart-id.interface';
import { Cart } from '../interfaces/cart.interface';
import { Visit } from '../interfaces/visit.interface';

@Controller()
export class CartController {
  @GrpcMethod('CartsService', 'GetCartById')
  getCartById(
    data: CartId,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Cart {
    console.log('Request came in');
    console.log(data);
    const items = [
      {
        id: '1',
        items: [
          { id: '1', cartId: '123232', variantId: 345, pricepoint: 'tier2' },
          { id: '2', cartId: '9088898', variantId: 456, pricepoint: 'price' },
        ],
      },
      {
        id: '2',
        items: [
          { id: '4', cartId: '657656', variantId: 222, pricepoint: 'tier2' },
          { id: '6', cartId: '4586767', variantId: 333, pricepoint: 'free' },
        ],
      },
    ];

    const item = items.find(({ id }) => parseInt(id) === data.id);
    console.log('item');
    console.log(item);
    return item;
  }

  @GrpcMethod('CartsService', 'GetCartByVisit')
  getCartByVisit(
    data: Visit,
    metadata: Metadata,
    call: ServerUnaryCall<any, any>,
  ): Cart {
    const items = [
      {
        id: '1',
        visitId: `2632`,
        items: [
          { id: '1', cartId: '123232', variantId: 345, pricepoint: 'tier2' },
          { id: '2', cartId: '9088898', variantId: 456, pricepoint: 'price' },
        ],
      },
      {
        id: '2',
        visitId: `3333`,
        items: [
          { id: '4', cartId: '657656', variantId: 222, pricepoint: 'tier2' },
          { id: '6', cartId: '4586767', variantId: 333, pricepoint: 'free' },
        ],
      },
    ];

    return items.find(({ visitId }) => parseInt(visitId) === data.visitId);
  }
}
