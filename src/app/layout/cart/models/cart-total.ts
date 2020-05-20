import { Currency } from '../../../shared/models/currency';

export class CartTotal {
  totalProductsPrice: number;
  shippingPrice: number;
  totalPrice: number;
  currency: Currency;

  constructor(cartTotalResponse: any) {
    this.totalProductsPrice = parseFloat(cartTotalResponse.totalProductsPrice);
    this.shippingPrice = parseFloat(cartTotalResponse.shippingPrice);
    this.totalPrice = cartTotalResponse.shippingPrice + this.totalProductsPrice;
    this.currency = new Currency(cartTotalResponse.currency);
  }
}
