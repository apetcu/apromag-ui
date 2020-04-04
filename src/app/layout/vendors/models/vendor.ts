export class Vendor {
  id: number;
  businessName: string;
  description: string;
  profilePicture: string;
  address: string;
  rating: number;
  photos: Array<VendorPhoto>;

  constructor(vendorResponse: any) {
    this.id = vendorResponse.id;
    this.businessName = vendorResponse.businessName;
    this.description = vendorResponse.description;
    this.address = vendorResponse.address;
    this.profilePicture = vendorResponse.profilePicture;
    this.photos = vendorResponse.photos;
    this.rating = vendorResponse.rating;
  }
}

interface VendorPhoto {
  id: string;
  imageUrl: string;
}
