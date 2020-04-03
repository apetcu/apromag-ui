export class Vendor{
    id: number;
    name: string;
    location: string;
    photos: any;

    constructor(vendorResponse: any) {
        this.id = vendorResponse.id;
        this.name = vendorResponse.name;
        this.location = vendorResponse.location;
        this.photos = vendorResponse.photos;
    }
}
