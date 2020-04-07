export class OrderedProduct {
  id: null;
  createdAt: Date;
  updatedAt: Date;
  productId: number;
  name: string;
  price: number;
  quantity: number;

  constructor(orderProductResponse: any) {
    this.id = orderProductResponse.id;
    this.productId = orderProductResponse.productId;
    this.name = orderProductResponse.name;
    this.price = orderProductResponse.price;
    this.quantity = orderProductResponse.quantity;
    this.createdAt = new Date(orderProductResponse.createdAt);
    this.updatedAt = new Date(orderProductResponse.updatedAt);
  }
}
