import { Injectable } from '@angular/core';
import { CartApiService } from './cart-api.service';
import { CartSummaryFields } from '../containers/cart-summary/cart-summary-form';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {
  constructor(private cartApiService: CartApiService) {}

  submitOrder(cartForm: CartSummaryFields, carTItems: Array<CartItem>) {
    return this.cartApiService.submitOrder(this.buildOrderRequest(cartForm, carTItems));
  }

  private buildOrderRequest(cartForm: CartSummaryFields, carTItems: Array<CartItem>) {
    return {
      ...cartForm,
      products: carTItems.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        productId: product.id,
        price: product.price
      }))
    };
  }
}
