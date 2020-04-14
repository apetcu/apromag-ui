import { OrderedProduct } from './ordered-product.model';

export class Order {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  phone: string;
  shippingAddress: string;
  products: Array<OrderedProduct>;
  status: string;
  vendorId: number;
  customerId: number;
  fullName: string;

  constructor(orderResponse: any) {
    this.id = orderResponse.id;
    this.createdAt = new Date(orderResponse.createdAt);
    this.updatedAt = new Date(orderResponse.updatedAt);

    this.status = orderResponse.status;
    this.fullName = orderResponse.fullName;
    this.email = orderResponse.email;
    this.phone = orderResponse.phone;
    this.vendorId = orderResponse.vendorId;
    this.customerId = orderResponse.customerId;
    this.shippingAddress = orderResponse.shippingAddress;
    this.products = orderResponse.products.map((entry) => new OrderedProduct(entry));
  }
}
