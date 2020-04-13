import { Injectable } from '@angular/core';
import { CartApiService } from './cart-api.service';
import { CartSummaryFields } from '../containers/cart-summary/cart-summary-form';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {
  constructor(private cartApiService: CartApiService) {}

  submitOrder(cartForm: CartSummaryFields, cartItems: Array<CartItem>, currentVendorId: number) {
    return this.cartApiService.submitOrder(this.buildOrderRequest(cartForm, cartItems, currentVendorId));
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
}
