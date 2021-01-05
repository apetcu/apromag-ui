import { Currency } from '../../../shared/models/currency';
import { Utils } from '../../../shared/services/utils/utils';
import { Vendor } from '../../vendor/models/vendor';
import { environment } from '../../../../environments/environment';
import { Image } from '../../../shared/models/image.model';

export class Product {
  private defaultImageUrl = './assets/images/default_profile.png';
  id: number;
  category_id: number;
  currency: Currency;
  description: string;
  images: Array<Image>;
  imageUrl: string;
  imageFullPath: string;
  name: string;
  unit: string;
  price: number;
  rating: number;
  stock: boolean;
  status: string;
  vendorId: number;

  vendor: Vendor;

  urlSlug: string;

  constructor(productResponse: any) {
    this.id = productResponse.id;
    this.category_id = productResponse.categoryId;
    this.currency = productResponse.currency ? new Currency(productResponse.currency) : null;
    this.description = productResponse.description;
    this.images = productResponse.images;
    this.imageUrl = this.getPrimaryPhoto;
    this.imageFullPath = this.imageUrl ? this.imageUrl : this.defaultImageUrl;
    this.name = productResponse.name;
    this.price = productResponse.price;
    this.rating = productResponse.rating;
    this.stock = productResponse.stock;
    this.status = productResponse.status;
    this.vendor = productResponse.vendor ? new Vendor(productResponse.vendor) : null;
    this.vendorId = this.vendor ? this.vendor.id : null;
    this.unit = productResponse.unit;

    this.urlSlug = this.name ? Product.generateUrlSlug(this.name, this.id) : null;
  }

  get getPrimaryPhoto() {
    return this.images && this.images.length && this.images[0].url;
  }

  public static generateUrlSlug(name: string, id: number): string {
    return `/products/${Utils.convertStringToSlug(name)}/${id}`; // Trim - from end of text
  }
}
