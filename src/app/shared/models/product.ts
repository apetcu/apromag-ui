import { Currency } from './currency';

export class Product {
  id: number;
  category: string;
  currency: Currency;
  description: string;
  imageUrl: string;
  name: string;
  unit: string;
  price: number;
  rating: number;
  stock: boolean;
  vendorId: number;
  fullPrice: string;

  urlSlug: string;

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
    this.unit = productResponse.unit;

    this.urlSlug = this.generateUrlSlug(productResponse.name, productResponse.id);

    this.fullPrice = productResponse.price.toFixed(2) + ' ' + this.currency.code;
  }

  private generateUrlSlug(name: string, id: number): string {
    return '/products/' + this.convertStringToSlug(name) + '/' + id; // Trim - from end of text
  }

  private convertStringToSlug(input): string {
    return input
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '');
  }
}
