import { Currency } from '../../../shared/models/currency';
import { Utils } from '../../../shared/services/utils/utils';

export class Product {
  private defaultImageUrl = './assets/images/default_profile.png';
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
    this.imageUrl = productResponse.imageUrl || this.defaultImageUrl;
    this.name = productResponse.name;
    this.price = productResponse.price;
    this.rating = productResponse.rating;
    this.stock = productResponse.stock;
    this.vendorId = productResponse.vendorId;
    this.unit = productResponse.unit;

    this.urlSlug = Product.generateUrlSlug(productResponse.name, productResponse.id, productResponse.vendorId);

    this.fullPrice = this.price ? productResponse.price.toFixed(2) + ' ' + this.currency.code : '-';
  }

  private static generateUrlSlug(name: string, id: number, vendorId: number): string {
    return `/products/${Utils.convertStringToSlug(name)}/${vendorId}/${id}`; // Trim - from end of text
  }
}
