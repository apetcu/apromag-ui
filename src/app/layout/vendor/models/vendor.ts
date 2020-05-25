import { Utils } from '../../../shared/services/utils/utils';
import { Image } from '../../../shared/models/image.model';
import { Currency } from '../../../shared/models/currency';

export class Vendor {
  id: number;
  businessName: string;
  description: string;
  defaultProfilePicture: string = 'assets/images/default_profile.png';
  profilePicture: string;
  address: string;
  phone: string;
  certificate: string;
  urlSlug: string;
  rating: number;

  shippingCost: number;
  freeShippingOver: number;
  shippingRemarks: string;
  currency: Currency = new Currency({ code: 'RON', factor: 100 });

  shippingPreferences: Array<VendorShippingPreference>;
  images: Array<Image> = [];

  constructor(vendorResponse: any) {
    this.id = vendorResponse.id;
    this.businessName = vendorResponse.businessName;
    this.description = vendorResponse.description;
    this.address = vendorResponse.address;
    this.phone = vendorResponse.phone;
    this.certificate = vendorResponse.certificate;

    this.shippingCost = vendorResponse.shippingCost;
    this.shippingRemarks = vendorResponse.shippingRemarks;
    this.freeShippingOver = vendorResponse.freeShippingOver;

    if (vendorResponse.profilePicture) {
      this.profilePicture = vendorResponse.profilePicture;
    }
    this.images = vendorResponse.images;
    this.rating = vendorResponse.rating;

    if (vendorResponse.shippingPreferences) {
      this.shippingPreferences = vendorResponse.shippingPreferences.map((entry) => ({
        name: entry.name,
        locationId: entry.locationId
      }));
    }

    this.urlSlug = Vendor.generateUrlSlug(vendorResponse.businessName, vendorResponse.id);
  }

  private static generateUrlSlug(name: string, id: number): string {
    return '/vendor/' + Utils.convertStringToSlug(name) + '/' + id; // Trim - from end of text
  }
}

export interface VendorShippingPreference {
  locationId: number;
  name: string;
}
