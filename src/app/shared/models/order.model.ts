import { OrderedProduct } from './ordered-product.model';
import { Currency } from './currency';
import { OrderStatusEnum } from '../enum/order-status.enum';

export class Order {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  seenAt: Date;
  email: string;
  phone: string;
  shippingAddress: string;
  products: Array<OrderedProduct>;
  status: string;
  vendorId: number;
  customerId: number;
  fullName: string;
  remarks: string;

  currency: Currency;

  subTotal: number;
  shippingPrice: number;
  total: number;

  constructor(orderResponse: any) {
    this.id = orderResponse.id;
    this.createdAt = new Date(orderResponse.createdAt);
    this.updatedAt = new Date(orderResponse.updatedAt);
    this.seenAt = orderResponse.seenAt ? new Date(orderResponse.seenAt) : null;

    this.status = orderResponse.status as OrderStatusEnum;
    this.fullName = orderResponse.fullName;
    this.email = orderResponse.email;
    this.phone = orderResponse.phone;
    this.vendorId = orderResponse.vendorId;
    this.customerId = orderResponse.customerId;
    this.shippingAddress = orderResponse.shippingAddress;
    this.remarks = orderResponse.remarks;
    this.subTotal = orderResponse.subTotal;
    this.shippingPrice = orderResponse.shippingPrice;
    this.total = orderResponse.subTotal + orderResponse.shippingPrice;

    this.currency = new Currency(orderResponse.currency);
    this.products = orderResponse.products.map((entry) => new OrderedProduct(entry));
  }
}
