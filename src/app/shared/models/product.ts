import { Currency } from './currency';

export class Product {
  id: number;
  category: string;
  currency: Currency;
  description: string;
  imageUrl: string;
  name: string;
  price: number;
  rating: number;
  stock: boolean;
  vendorId: number;

  constructor(productResponse: any) {
    this.id = productResponse.id;
    this.category = productResponse.category;
    this.currency = new Currency(productResponse.currency);
    this.description = productResponse.description;
    this.imageUrl = productResponse.imageUrl;
    this.name = productResponse.name;
    this.price = productResponse.price;
    this.rating = productResponse.rating;
    this.stock = productResponse.stock;
    this.vendorId = productResponse.vendorId;
  }
}
