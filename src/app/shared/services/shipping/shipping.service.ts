import { Injectable } from '@angular/core';
import { ShippingLocation } from '../../models/location';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippingLocationChange: BehaviorSubject<ShippingLocation> = new BehaviorSubject<ShippingLocation>(
    new ShippingLocation({ id: 99, name: 'Toata Romania' })
  );
  currentLocation: ShippingLocation;

  constructor() {}

  setShippingLocation(location: ShippingLocation) {
    this.currentLocation = location;
    this.shippingLocationChange.next(location);
  }

  onShippingLocationChange(): Observable<ShippingLocation> {
    return this.shippingLocationChange.asObservable();
  }
}