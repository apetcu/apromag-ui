import { Injectable } from '@angular/core';
import { ShippingLocation } from '../../models/location';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  currentLocation: ShippingLocation;

  constructor() {}

  setShippingLocation(location: ShippingLocation) {
    this.currentLocation = location;
  }
}
