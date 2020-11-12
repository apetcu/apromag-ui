import { Injectable } from '@angular/core';
import { ShippingLocation } from '../../models/shipping-location';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { StorageLocations } from '../storage/storage-locations';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippingLocationChange: BehaviorSubject<ShippingLocation> = new BehaviorSubject<ShippingLocation>(
    new ShippingLocation({ id: '', name: 'LOCATIONS.ANYWHERE' })
  );
  currentLocation: ShippingLocation;

  constructor(private storageService: StorageService) {
    let selectedShippingLocation = storageService.getItem(StorageLocations.SHIPPING_LOCATION);
    if (selectedShippingLocation) {
      this.shippingLocationChange.next(selectedShippingLocation);
    }
  }

  resetShippingLocation(): void {
    this.setShippingLocation(new ShippingLocation({ id: '', name: 'LOCATIONS.ANYWHERE' }));
  }

  getShippingLocation(): ShippingLocation {
    return this.shippingLocationChange.value;
  }

  setShippingLocation(location: ShippingLocation) {
    this.currentLocation = location;
    this.shippingLocationChange.next(location);
    this.storageService.setItem(StorageLocations.SHIPPING_LOCATION, location);
  }

  onShippingLocationChange(): Observable<ShippingLocation> {
    return this.shippingLocationChange.asObservable();
  }
}
