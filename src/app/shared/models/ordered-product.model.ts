import { Currency } from './currency';
import { Product } from '../../layout/product/models/product';

export class OrderedProduct {
  id: null;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  name: string;
  urlSlug: string;
  price: number;
  quantity: number;

  currency: Currency;

  constructor(orderProductResponse: any) {
    this.id = orderProductResponse.id;
    this.productId = orderProductResponse.product_id;
    this.name = orderProductResponse.name;
    this.price = orderProductResponse.price;
    this.quantity = orderProductResponse.quantity;

    this.createdAt = new Date(orderProductResponse.createdAt);
    this.updatedAt = new Date(orderProductResponse.updatedAt);

    this.urlSlug = Product.generateUrlSlug(this.name, this.productId);

    this.currency = new Currency(orderProductResponse.currency);
  }
}
