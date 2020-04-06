import { Utils } from '../../../shared/services/utils/utils';

export class Vendor {
  id: number;
  businessName: string;
  description: string;
  defaultProfilePicture: string = 'assets/images/default_profile.png';
  profilePicture: string = this.defaultProfilePicture;
  address: string;
  urlSlug: string;
  rating: number;
  photos: Array<VendorPhoto> = [];

  constructor(vendorResponse: any) {
    this.id = vendorResponse.id;
    this.businessName = vendorResponse.businessName;
    this.description = vendorResponse.description;
    this.address = vendorResponse.address;
    if (vendorResponse.profilePicture) {
      this.profilePicture = vendorResponse.profilePicture;
    }
    if (vendorResponse.photos) {
      this.photos = vendorResponse.photos;
    }
    this.rating = vendorResponse.rating;

    this.urlSlug = Vendor.generateUrlSlug(vendorResponse.businessName, vendorResponse.id);
  }

  private static generateUrlSlug(name: string, id: number): string {
    return '/vendors/' + Utils.convertStringToSlug(name) + '/' + id; // Trim - from end of text
  }
}

interface VendorPhoto {
  id: string;
  imageUrl: string;
}
