import { OrderedProduct } from './ordered-product.model';

export class Order {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  shippingAddress: string;
  invoiceAddress: string;
  products: Array<OrderedProduct>;
  status: string;
  vendorId: number;
  customerId: number;

  constructor(orderResponse: any) {
    this.id = orderResponse.id;
    this.createdAt = new Date(orderResponse.createdAt);
    this.updatedAt = new Date(orderResponse.updatedAt);

    this.status = orderResponse.status;
    this.shippingAddress = orderResponse.shippingAddress;
    this.invoiceAddress = orderResponse.invoiceAddress;
    this.vendorId = orderResponse.vendorId;
    this.customerId = orderResponse.customerId;
    this.products = orderResponse.products.map((entry) => new OrderedProduct(entry));
  }
}
