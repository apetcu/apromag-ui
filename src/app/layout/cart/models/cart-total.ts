import { Currency } from '../../../shared/models/currency';

export class CartTotal {
  totalProductsPrice: number;
  shippingPrice: number;
  totalPrice: number;
  totalItems: number;
  currency: Currency;

  constructor(cartTotalResponse: any) {
    this.totalProductsPrice = parseFloat(cartTotalResponse.totalProductsPrice);
    this.shippingPrice = parseFloat(cartTotalResponse.shippingPrice);
    this.totalPrice = this.shippingPrice + this.totalProductsPrice;
    this.totalItems = this.shippingPrice + this.totalItems;
    this.currency = new Currency(cartTotalResponse.currency);
  }
}
