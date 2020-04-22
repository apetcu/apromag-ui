import { Injectable } from '@angular/core';
import { CartApiService } from './cart-api.service';
import { CartSummaryFields } from '../containers/cart-summary/cart-summary-form';
import { CartItem } from '../models/cart-item';
import { CartTotal } from '../models/cart-total';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {
  constructor(private cartApiService: CartApiService) {}

  submitOrder(cartForm: CartSummaryFields, cartItems: Array<CartItem>, currentVendorId: number) {
    return this.cartApiService.submitOrder(this.buildOrderRequest(cartForm, cartItems, currentVendorId));
  }

  calculateTotal(cartItems: Array<CartItem>) {
    return this.cartApiService.calculateTotal(this.buildCartTotalsRequest(cartItems)).pipe(map((cartTotal) => new CartTotal(cartTotal)));
  }

  private buildOrderRequest(cartForm: CartSummaryFields, carTItems: Array<CartItem>, currentVendorId: number) {
    return {
      ...cartForm,
      vendorId: currentVendorId,
      products: carTItems.map((product) => ({
        name: product.name,
        quantity: product.quantity,
        productId: product.id,
        price: product.price
      }))
    };
  }

  private buildCartTotalsRequest(carTItems: Array<CartItem>) {
    return carTItems.map((entry) => ({
      id: entry.id,
      quantity: entry.quantity
    }));
  }
}
