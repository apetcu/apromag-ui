import { Product } from '../../product/models/product';

export class CartItem extends Product {
  quantity: number;

  constructor(productInfo: Product, quantity: number) {
    super(productInfo);
    this.quantity = quantity;
  }
}
