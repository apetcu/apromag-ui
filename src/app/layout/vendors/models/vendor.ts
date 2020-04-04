export class Vendor {
  id: number;
  name: string;
  description: string;
  location: string;
  photos: any;

  constructor(vendorResponse: any) {
    this.id = vendorResponse.id;
    this.name = vendorResponse.name;
    this.description = vendorResponse.description;
    this.location = vendorResponse.location;
    this.photos = vendorResponse.photos;
  }
}
