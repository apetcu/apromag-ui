import { Currency } from '../../../shared/models/currency';

export class CartTotal {
  totalProductsPrice: number;
  shippingPrice: number;
  totalPrice: number;
  currency: Currency;

  constructor(cartTotalResponse: any) {
    this.totalProductsPrice = cartTotalResponse.totalProductsPrice;
    this.shippingPrice = cartTotalResponse.shippingPrice;
    this.totalPrice = cartTotalResponse.shippingPrice + this.totalProductsPrice;
    this.currency = new Currency(cartTotalResponse.currency);
  }
}
