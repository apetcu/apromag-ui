import { Currency } from '../../../shared/models/currency';
import { Utils } from '../../../shared/services/utils/utils';
import { Vendor } from '../../vendor/models/vendor';
import { environment } from '../../../../environments/environment';

export class Product {
  private defaultImageUrl = './assets/images/default_profile.png';
  id: number;
  category: string;
  currency: Currency;
  description: string;
  imageUrl: string;
  imageFullPath: string;
  name: string;
  unit: string;
  price: number;
  rating: number;
  stock: boolean;
  vendorId: number;
  fullPrice: string;

  vendor: Vendor;

  urlSlug: string;

  constructor(productResponse: any) {
    this.id = productResponse.id;
    this.category = productResponse.category;
    this.currency = new Currency(productResponse.currency);
    this.description = productResponse.description;
    this.imageUrl = productResponse.imageUrl;
    this.imageFullPath = this.imageUrl ? environment.imageBasePath + this.imageUrl : this.defaultImageUrl;
    this.name = productResponse.name;
    this.price = productResponse.price;
    this.rating = productResponse.rating;
    this.stock = productResponse.stock;
    this.vendor = new Vendor(productResponse.vendor);
    this.vendorId = this.vendor.id;
    this.unit = productResponse.unit;

    this.urlSlug = Product.generateUrlSlug(this.name, this.id, this.vendorId);

    this.fullPrice = this.computeFullPrice();
  }

  computeFullPrice(quantity = 1) {
    return this.price ? (this.price * quantity).toFixed(2) + ' ' + this.currency.code : '-';
  }

  private static generateUrlSlug(name: string, id: number, vendorId: number): string {
    return `/products/${Utils.convertStringToSlug(name)}/${vendorId}/${id}`; // Trim - from end of text
  }
}
