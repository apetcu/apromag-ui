export class ShippingLocation {
  id: number;
  name: string;
  gpsCoordinates: [number, number];

  constructor(locationResponse: any) {
    this.id = locationResponse.id;
    this.name = locationResponse.name;
    this.gpsCoordinates = [locationResponse.lat, locationResponse.lon];
  }
}
