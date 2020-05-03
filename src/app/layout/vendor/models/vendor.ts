import { Utils } from '../../../shared/services/utils/utils';

export class Vendor {
  id: number;
  businessName: string;
  description: string;
  defaultProfilePicture: string = 'assets/images/default_profile.png';
  profilePicture: string;
  address: string;
  urlSlug: string;
  rating: number;

  shippingCost: number;
  freeShippingOver: number;
  shippingRemarks: string;

  shippingPreferences: Array<VendorShippingPreference>;
  photos: Array<VendorPhoto> = [];

  constructor(vendorResponse: any) {
    this.id = vendorResponse.id;
    this.businessName = vendorResponse.businessName;
    this.description = vendorResponse.description;
    this.address = vendorResponse.address;

    this.shippingCost = vendorResponse.shippingCost;
    this.shippingRemarks = vendorResponse.shippingRemarks;
    this.freeShippingOver = vendorResponse.freeShippingOver;

    if (vendorResponse.profilePicture) {
      this.profilePicture = vendorResponse.profilePicture;
    }
    if (vendorResponse.photos) {
      this.photos = vendorResponse.photos;
    }
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

interface VendorPhoto {
  id: string;
  imageUrl: string;
}

export interface VendorShippingPreference {
  locationId: number;
  name: string;
}
