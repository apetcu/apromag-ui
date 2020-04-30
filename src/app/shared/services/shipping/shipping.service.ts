import { Injectable } from '@angular/core';
import { ShippingLocation } from '../../models/shipping-location';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippingLocationChange: BehaviorSubject<ShippingLocation> = new BehaviorSubject<ShippingLocation>(
    new ShippingLocation({ id: '', name: 'LOCATIONS.ANYWHERE' })
  );
  currentLocation: ShippingLocation;

  constructor() {}

  getShippingLocation(): ShippingLocation {
    return this.shippingLocationChange.value;
  }

  setShippingLocation(location: ShippingLocation) {
    this.currentLocation = location;
    this.shippingLocationChange.next(location);
  }

  onShippingLocationChange(): Observable<ShippingLocation> {
    return this.shippingLocationChange.asObservable();
  }
}
